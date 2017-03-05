import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults, isShadowCard } from './userResults.js';
import Logger from '../logger.js';

function shuffle (cards) {
  let shuffled = cards.concat([]);
  let i = 0
    , j = 0
    , temp = null

  for (i = shuffled.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }

  return shuffled;
}

export default insertUserResult = new ValidatedMethod({
  name: 'userResults.insert',
  validate: new SimpleSchema({}).validator(),
  run() {
    // Only logged in users can create their user results
    if (!this.userId) {
      throw new Meteor.Error('userResults.insert.unauthorised',
        'User must be logged in to create a new result');
    }
    
    if (UserResults.find({ ownerUserId: this.userId }).count() !== 0) {
      throw new Meteor.Error('userResults.insert.existingResult',
        'User must not have an existing result');
    }

    let result = Factory.tree('userResults.new', {
      ownerUserId: this.userId,
    });

    // shuffle the deck
    result.cardsRemaining = shuffle(result.cardsRemaining);
    // pull out the first shadow card and assign it to the shadow pile
    const shadowIndex = result.cardsRemaining.findIndex((card) => isShadowCard(card));
    result.shadow.unshift( result.cardsRemaining[shadowIndex] );
    result.cardsRemaining.splice(shadowIndex, 1);

    if (Meteor.isServer) {
      Logger.debug('userResults.insert: inserting new result', { 
        userId: this.userId, 
        result: result
      });
    }

    return UserResults.insert(result);
  },
});