import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import Logger from '../logger.js';

export default arrangeLikeEnergise = new ValidatedMethod({
  name: 'userResults.arrangeLikeEnergise',
  validate: new SimpleSchema({ 
    cards: { type: Array },
  }).validator(),
  run(cards) {
    if (cards === undefined) {
      throw new Meteor.Error('userResults.arrangeLikeEnergise.missingParameter',
        'Cards cannot be undefined');
    }

    if (!this.userId) {
      throw new Meteor.Error('userResults.arrangeLikeEnergise.unauthorised',
        'User must be logged in to arrange like energise');
    }

    const results = UserResults.find({ ownerUserId: this.userId });

    if (results.count() !== 1) {
      throw new Meteor.Error('userResults.arrangeLikeEnergise.noResult',
        'User must have one result to modify');
    }

    const result = results.fetch()[0];

    let match = true;
    if (result.likeEnergise.length !== cards.length) {
      match = false;
    } else {
      const cardsSorted = cards.concat([]).sort();
      result.likeEnergise.sort();

      for(let i = 0; i < cardsSorted.length; i++) {
        if (cardsSorted[i] !== result.likeEnergise[i]) {
          match = false;
          break;
        }
      }
    }

    if (!match) {
      throw new Meteor.Error('userResults.arrangeLikeEnergise.mismatch',
        'Card ' + cards.toString() + ' must be the same as the existing like energise pile');
    }

    if (Meteor.isServer) {
      Logger.debug('userResults.arrangeLikeEnergise: setting new arrangement', { 
        userId: this.userId, 
        result: result,
        toLikeEnergise: cards,
      });
    }

    UserResults.update(result._id, {
      $set: {
        likeEnergise: cards,
      }
    });
  },
});