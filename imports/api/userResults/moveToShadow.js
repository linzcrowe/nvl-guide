import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';

export default moveToShadow = new ValidatedMethod({
  name: 'userResults.moveToShadow',
  validate: new SimpleSchema({
    card: { type: String },
  }).validator(),
  run(card, toFront) {
    if (card === undefined) {
      throw new Meteor.Error('userResults.moveToShadow.missingParameter',
        'Card cannot be undefined');
    }
    if (toFront === undefined) {
      throw new Meteor.Error('userResults.moveToShadow.missingParameter',
        'toFront cannot be undefined');
    }

    if (!this.userId) {
      throw new Meteor.Error('userResults.moveToShadow.unauthorised',
        'User must be logged in to move card');
    }

    if (UserResults.helpers.hasZeroResults(this.userId)) {
      throw new Meteor.Error('userResults.moveToShadow.noResult',
        'User must have a result to modify');
    }

    if(!UserResults.helpers.isShadowCard(card)) {
      throw new Meteor.Error('userResults.moveToShadow.notShadow',
        'Card must be a shadow (' + card + ')');
    }

    const result = UserResults.findOne( { ownerUserId: this.userId } );

    if (!result.cardsRemaining.includes(card)) {
      throw new Meteor.Error('userResults.moveToShadow.cardNotFound',
        'Card ' + card + ' is not in the remaining cards pile');
    }

    let cardsRemaining = result.cardsRemaining.concat([]);
    cardsRemaining.splice(result.cardsRemaining.indexOf(card), 1);

    let shadow = result.shadow.concat([]);
    shadow.unshift(card);!

    UserResults.update(result._id, {
      $set: {
        cardsRemaining: cardsRemaining,
        shadow: shadow,
      }
    });
  }
});