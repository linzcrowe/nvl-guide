import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import Logger from '../logger.js';

export default arrangeLikeDrain = new ValidatedMethod({
  name: 'userResults.arrangeLikeDrain',
  validate: new SimpleSchema({ 
    cards: { type: Array },
  }).validator(),
  run(cards) {
    if (cards === undefined) {
      throw new Meteor.Error('userResults.arrangeLikeDrain.missingParameter',
        'Cards cannot be undefined');
    }

    if (!this.userId) {
      throw new Meteor.Error('userResults.arrangeLikeDrain.unauthorised',
        'User must be logged in');
    }

    const results = UserResults.find({ ownerUserId: this.userId });

    if (results.count() !== 1) {
      throw new Meteor.Error('userResults.arrangeLikeDrain.noResult',
        'User must have one result to modify');
    }

    const result = results.fetch()[0];

    let match = true;
    if (result.likeDrain.length !== cards.length) {
      match = false;
    } else {
      const cardsSorted = cards.concat([]).sort();
      result.likeDrain.sort();

      for(let i = 0; i < cardsSorted.length; i++) {
        if (cardsSorted[i] !== result.likeDrain[i]) {
          match = false;
          break;
        }
      }
    }

    if (!match) {
      throw new Meteor.Error('userResults.arrangeLikeDrain.mismatch',
        'Card ' + cards.toString() + ' must be the same as the existing like drain pile');
    }

    if (Meteor.isServer) {
      Logger.debug('userResults.arrangeLikeDrain: setting new likeDrain arrangement', { 
        userId: this.userId, 
        result: result,
        toLikeDrain: cards,
      });
    }

    UserResults.update(result._id, {
      $set: {
        likeDrain: cards,
      }
    });
  },
});