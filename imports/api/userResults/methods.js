import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';

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

export const insertUserResult = new ValidatedMethod({
  name: 'userResults.insert',
  validate: new SimpleSchema({}).validator(),
  run() {
    // Only logged in users can create their user results
    if (!this.userId) {
      throw new Meteor.Error('userResults.insert.unauthorised',
        'User must be logged in to create a new result');
    }

    // User does not have any results
    if (!UserResults.helpers.hasZeroResults(this.userId)) {
      throw new Meteor.Error('userResults.insert.existingResult',
        'User must not have an existing result');
    }

    let result = Factory.tree('userResults.new', {
      ownerUserId: this.userId,
    });
    // shuffle the deck
    result.cardsRemaining = shuffle(result.cardsRemaining);

    return UserResults.insert(result);
  },
});

export const moveToLikeEnergise = new ValidatedMethod({
  name: 'userResults.moveToLikeEnergise',
  validate: new SimpleSchema({
    card: { type: String },
  }).validator(),
  run(card) {
    if (card === undefined) {
      throw new Meteor.Error('userResults.moveToLikeEnergise.missingParameter',
        'Card cannot be undefined');
    }

    if (!this.userId) {
      throw new Meteor.Error('userResults.moveToLikeEnergise.unauthorised',
        'User must be logged in to move card');
    }

    if(UserResults.helpers.hasZeroResults(this.userId)) {
      throw new Meteor.Error('userResults.moveToLikeEnergise.noResult',
        'User must have a result to modify');
    }

    const result = UserResults.findOne( { ownerUserId: this.userId } );

    if (!result.cardsRemaining.includes(card)) {
      throw new Meteor.Error('userResults.moveToLikeEnergise.cardNotFound',
        'card ' + card + ' is not in remaining cards pile');
    }

    let cardsRemaining = result.cardsRemaining.concat([]);
    cardsRemaining.splice(result.cardsRemaining.indexOf(card), 1);

    let likeEnergise = result.likeEnergise.concat();
    likeEnergise.unshift(card);

    UserResults.update(result._id, { 
      $set: {
        cardsRemaining: cardsRemaining,
        likeEnergise: likeEnergise,
      }
    });
  }
});

export const moveToLikeDrain = new ValidatedMethod({
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