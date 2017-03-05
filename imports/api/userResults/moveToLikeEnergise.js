import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults, isShadowCard } from './userResults.js';
import Logger from '../logger.js';

export default moveToLikeEnergise = new ValidatedMethod({
  name: 'userResults.moveToLikeEnergise',
  validate: new SimpleSchema({
    card: { type: String },
  }).validator(),
  run({card}) {
    if (!this.userId) {
      throw new Meteor.Error('userResults.moveToLikeEnergise.unauthorised',
        'User must be logged in to move card');
    }

    const results = UserResults.find({ ownerUserId: this.userId });

    if(results.count() !== 1) {
      throw new Meteor.Error('userResults.moveToLikeEnergise.noResult',
        'User must have one result to modify');
    }

    if(isShadowCard(card)) {
      throw new Meteor.Error('userResults.moveToLikeEnergise.shadow',
        'Card must not be a shadow (' + card + ')');
    }

    const result = results.fetch()[0];

    if (!result.cardsRemaining.includes(card)) {
      throw new Meteor.Error('userResults.moveToLikeEnergise.cardNotFound',
        'card ' + card + ' is not in remaining cards pile');
    }

    let cardsRemaining = result.cardsRemaining.concat([]);
    cardsRemaining.splice(result.cardsRemaining.indexOf(card), 1);

    let likeEnergise = result.likeEnergise.concat();
    likeEnergise.unshift(card);

    let likeEnergiseRanked = result.likeEnergiseRanked.concat();
    // To setup for ranking later, we put the first four in the ranked pile
    if (likeEnergiseRanked.length < 4) {
      likeEnergiseRanked.unshift(card);
    }

    if (Meteor.isServer) {
      Logger.debug('userResults.likeEnergise: move to likeEnergise', { 
        userId: this.userId, 
        result: result,
        toLikeEnergise: likeEnergise,
        likeEnergiseRanked: likeEnergiseRanked,
      });
    }

    UserResults.update(result._id, { 
      $set: {
        cardsRemaining: cardsRemaining,
        likeEnergise: likeEnergise,
        likeEnergiseRanked: likeEnergiseRanked,
      }
    });
  }
});