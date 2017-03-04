import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import Logger from '../logger.js';

export default rankLikeEnergise = new ValidatedMethod({
  name: 'userResults.rankLikeEnergise',
  validate: new SimpleSchema({ 
    card: { type: String },
    toPosition: { type: Number },
  }).validator(),
  run({card, toPosition}) {
    //const card = params.card;
    //const toPosition = params.toPosition;

    if (!this.userId) {
      throw new Meteor.Error('userResults.rankLikeEnergise.unauthorised',
        'User must be logged in to arrange like energise');
    }

    const results = UserResults.find({ ownerUserId: this.userId });

    if (results.count() !== 1) {
      throw new Meteor.Error('userResults.rankLikeEnergise.noResult',
        'User must have one result to modify');
    }

    const result = results.fetch()[0];

    if (result.likeEnergise.length === 0) {
      throw new Meteor.Error('userResults.rankLikeEnergise.noCardsToRank',
        'There are no more cards in the likeEnergise pile to rank');
    }

    if (!result.likeEnergise.includes(card)) {
      throw new Meteor.Error('userResults.rankLikeEnergise.cardNotFound',
        'The card ' + card + ' is not in the unranked likeEnergise pile');
    }

    let likeEnergise = result.likeEnergise.concat([]);
    likeEnergise.splice(likeEnergise.indexOf(card), 1);
    let likeEnergiseRanked = result.likeEnergiseRanked.concat([]);
    likeEnergiseRanked.splice(toPosition, 0, card);

    if (Meteor.isServer) {
      Logger.debug('userResults.rankLikeEnergise: ranking card', { 
        userId: this.userId, 
        result: result,
        toLikeEnergise: likeEnergise,
        toLikeEnergiseRanked: likeEnergiseRanked,
      });
    }

    UserResults.update(result._id, {
      $set: {
        likeEnergise: likeEnergise,
        likeEnergiseRanked: likeEnergiseRanked,
      }
    });
  },
});