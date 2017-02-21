import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { UserResults } from './userResults.js';

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export const insertUserResult = new ValidatedMethod({
  name: 'userResults.insert',
  validate: new SimpleSchema({
    _id: { type: String, regEx: SimpleSchema.RegEx.Id },
    stage: { type: Number },
    cardsRemaining: { type: [String] },
    likeEnergise: { type: [String] },
    likeDrain: { type: [String] },
    notLike: { type: [String] },
    shadow: { type: [String] },
    ownerUserId: { type: String, regEx: SimpleSchema.RegEx.Id },
  }).validator(),
  run() {
    // Only logged in users can create their user results
    if (!this.userId) {
      throw new Meteor.Error('userResults.insert.unauthorised',
        'User must be logged in to create a new result');
    }

    // Users can only have a single result
    if ( UserResults.find({ownerUserId: this.userId}).count() != 0 ) {
      throw new Meteor.Error('userResults.insert.existingResult',
        'User can only have a single result');
    }

    let deckOfCards = [
        'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', // hearts
        'h8', 'h9', 'h10', 'hj', 'hq', 'hk',
        'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', // diamonds
        'd8', 'd9', 'd10', 'dj', 'dq', 'dk',
        'sa', 's2', 's3', 's4', 's5', 's6', 's7', // spades
        's8', 's9', 's10', 'sj', 'sq', 'sk',
        'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', // clubs
        'c8', 'c9', 'c10', 'cj', 'cq', 'ck'];

    // So that the order users go through the cards is always different
    shuffle(deckOfCards);

    // Inserts always place a new, default setup result
    const result = {
      stage: 0,
      cardsRemaining: deckOfCards,
      likeEnergise: [],
      likeDrain: [],
      notLike: [],
      shadow: [],
      ownerUserId: this.userId,
    }

    return UserResults.insert(result);
  },
});