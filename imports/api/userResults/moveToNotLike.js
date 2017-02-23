import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';

export default moveToNotLike = new ValidatedMethod({
  name: 'userResults.moveToNotLike',
  validate: new SimpleSchema({
    card: { type: String },
  }).validator(),
  run(card) {
    if (card === undefined) {
      throw new Meteor.Error('userResults.moveToNotLike.missingParameter',
        'Card cannot be undefined');
    }

    if (!this.userId) {
      throw new Meteor.Error('userResults.moveToNotLike.unauthorised',
        'User must be logged in to move card');
    }

    if (UserResults.helpers.hasZeroResults(this.userId)) {
      throw new Meteor.Error('userResults.moveToNotLike.noResult',
        'User must have a result to modify');
    }

    if(UserResults.helpers.isShadowCard(card)) {
      throw new Meteor.Error('userResults.moveToNotLike.shadow',
        'Card must not be a shadow (' + card + ')');
    }

    const result = UserResults.findOne( { ownerUserId: this.userId } );

    if (!result.cardsRemaining.includes(card)) {
      throw new Meteor.Error('userResults.moveToNotLike.cardNotFound',
        'card ' + card + ' is not in the remaining cards pile');
    }

    let cardsRemaining = result.cardsRemaining.concat([]);
    cardsRemaining.splice(result.cardsRemaining.indexOf(card), 1);

    let notLike = result.notLike.concat([]);
    notLike.unshift(card);

    UserResults.update(result._id, {
      $set: {
        cardsRemaining: cardsRemaining,
        notLike: notLike,
      }
    });
  }
});