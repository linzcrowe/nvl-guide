import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';

export default moveToLikeDrain = new ValidatedMethod({
  name: 'userResults.moveToLikeDrain',
  validate: new SimpleSchema({
    card: { type: String },
  }).validator(),
  run(card) {
    if (card === undefined) {
      throw new Meteor.Error('userResults.moveToLikeDrain.missingParameter',
        'Card cannot be undefined');
    }

    if (!this.userId) {
      throw new Meteor.Error('userResults.moveToLikeDrain.unauthorised',
        'User must be logged in to move card');
    }

    if (UserResults.helpers.hasZeroResults(this.userId)) {
      throw new Meteor.Error('userResults.moveToLikeDrain.noResult',
        'User must have a result to modify');
    }

    if(UserResults.helpers.isShadowCard(card)) {
      throw new Meteor.Error('userResults.moveToLikeDrain.shadow',
        'Card must not be a shadow (' + card + ')');
    }

    const result = UserResults.findOne( { ownerUserId: this.userId } );

    if (!result.cardsRemaining.includes(card)) {
      throw new Meteor.Error('userResults.moveToLikeDrain.cardNotFound',
        'card ' + card + ' is not in the remaining cards pile');
    }

    let cardsRemaining = result.cardsRemaining.concat([]);
    cardsRemaining.splice(result.cardsRemaining.indexOf(card), 1);

    let likeDrain = result.likeDrain.concat([]);
    likeDrain.unshift(card);

    UserResults.update(result._id, {
      $set: {
        cardsRemaining: cardsRemaining,
        likeDrain: likeDrain,
      }
    });
  }
});