import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults, isShadowCard } from './userResults.js';
import Logger from '../logger.js';

export default moveToLikeDrain = new ValidatedMethod({
  name: 'userResults.moveToLikeDrain',
  validate: new SimpleSchema({
    card: { type: String },
  }).validator(),
  run({card}) {
    if (!this.userId) {
      throw new Meteor.Error('userResults.moveToLikeDrain.unauthorised',
        'User must be logged in to move card');
    }

    const results = UserResults.find({ ownerUserId: this.userId });

    if (results.count() !== 1) {
      throw new Meteor.Error('userResults.moveToLikeDrain.noResult',
        'User must have one result to modify');
    }

    if(isShadowCard(card)) {
      throw new Meteor.Error('userResults.moveToLikeDrain.shadow',
        'Card must not be a shadow (' + card + ')');
    }

    const result = results.fetch()[0];

    if (!result.cardsRemaining.includes(card)) {
      throw new Meteor.Error('userResults.moveToLikeDrain.cardNotFound',
        'card ' + card + ' is not in the remaining cards pile');
    }

    let cardsRemaining = result.cardsRemaining.concat([]);
    cardsRemaining.splice(result.cardsRemaining.indexOf(card), 1);

    let likeDrain = result.likeDrain.concat([]);
    likeDrain.unshift(card);

    if (Meteor.isServer) {
      Logger.debug('userResults.moveToLikeDrain: moving card', { 
        userId: this.userId, 
        result: result,
        toLikeDrain: likeDrain,
      });
    }

    UserResults.update(result._id, {
      $set: {
        cardsRemaining: cardsRemaining,
        likeDrain: likeDrain,
      }
    });
  }
});