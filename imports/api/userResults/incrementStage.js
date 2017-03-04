import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { UserResults } from './userResults.js';
import Logger from '../logger.js';

export default incrementStage = new ValidatedMethod({
  name: 'userResults.incrementStage',
  validate: new SimpleSchema({}).validator(),
  run(params) {
    if (!this.userId) {
      throw new Meteor.Error('userResults.incrementStage.unauthorised',
        'User must be logged in to arrange like energise');
    }

    const results = UserResults.find({ ownerUserId: this.userId });

    if (results.count() !== 1) {
      throw new Meteor.Error('userResults.incrementStage.noResult',
        'User must have one result to modify');
    }

    const result = results.fetch()[0];

    let nextStage;

    switch(result.stage) {
      case Stages.SORT:
        if (result.cardsRemaining.length > 0) {
          throw new Meteor.Error('userResults.incrementStage.cardsRemaining',
            'Cannot progress while there are remaining cards to be sorted');
        }
        nextStage = Stages.RANK_LIKE_ENERGISE;
        break;
      case Stages.RANK_LIKE_ENERGISE:
        nextStage = Stages.RANK_LIKE_DRAIN;
        break;
      case Stages.RANK_LIKE_DRAIN:
        nextStage = Stages.COMPLETE;
        break;
      case Stages.COMPLETE:
        throw new Meteor.Error('userResults.incrementStage.complete',
          'Result is already complete');
        break;
      default:
        // Should never reach here
        throw new Error('userResults.incrementStage(): unable to handle stage (' +
          result.stage + ')');
    }

    if (Meteor.isServer) {
      Logger.debug('userResults.incrementStage: Updating stage', {
        userId: this.userId,
        result: result,
        toStage: nextStage,
      });
    }

    UserResults.update(result._id, {
      $set: {
        stage: nextStage,
      }
    });
  }
});