import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import Logger from '../logger.js';

export default rankLikeDrain = new ValidatedMethod({
  name: 'userResults.rankLikeDrain',
  validate: new SimpleSchema({ 
    card: { type: String },
    toPosition: { type: Number },
  }).validator(),
  run({card, toPosition}) {
    if (!this.userId) {
      throw new Meteor.Error('userResults.rankLikeDrain.unauthorised',
        'User must be logged in to rank likeDrain cards');
    }

    const results = UserResults.find({ ownerUserId: this.userId });

    if (results.count() !== 1) {
      throw new Meteor.Error('userResults.rankLikeDrain.noResult',
        'User must have one result to modify');
    }

    const result = results.fetch()[0];

    if (result.likeDrain.length === 0) {
      throw new Meteor.Error('userResults.rankLikeDrain.noCardsToRank',
        'There are no more cards in the likeDrain pile to rank');
    }

    if (!result.likeDrain.includes(card)) {
      throw new Meteor.Error('userResults.rankLikeDrain.cardNotFound',
        'The card ' + card + ' is not in the unranked likeDrain pile');
    }

    let likeDrain = result.likeDrain.concat([]);
    likeDrain.splice(likeDrain.indexOf(card), 1);
    let likeDrainRanked = result.likeDrainRanked.concat([]);
    likeDrainRanked.splice(toPosition, 0, card);

    if (Meteor.isServer) {
      Logger.debug('userResults.rankLikeDrain: ranking card', { 
        userId: this.userId, 
        result: result,
        tolikeDrain: likeDrain,
        tolikeDrainRanked: likeDrainRanked,
      });
    }

    UserResults.update(result._id, {
      $set: {
        likeDrain: likeDrain,
        likeDrainRanked: likeDrainRanked,
      }
    });
  },
});