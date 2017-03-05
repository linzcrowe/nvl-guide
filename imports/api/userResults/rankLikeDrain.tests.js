/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import rankLikeDrain from './rankLikeDrain.js';

if (Meteor.isServer) {
  describe('userResults.methods.rankLikeDrain', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.rankLikeDrain.unauthorised', function() {
        expect(
          () => rankLikeDrain.run.call({userId: undefined}, {card: '', toPosition: 0})
          ).to.throw(Error, '[userResults.rankLikeDrain.unauthorised]');
      });
    });

    describe('when the user does not have a result', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.rankLikeDrain.noResult', function() {
        expect(
          () => rankLikeDrain.run.call({userId: userId}, {card: '', toPosition: 0})
          ).to.throw(Error, '[userResults.rankLikeDrain.noResult]');
      });
    });

    describe('when there are no more likeDrain cards left', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          likeDrain: [],
        });
      });

      it('throws the error userResults.rankLikeDrain.noCardsToRank', function() {
        expect(
          () => rankLikeDrain.run.call({userId: userId}, {card: '', toPosition: 0})
          ).to.throw(Error, '[userResults.rankLikeDrain.noCardsToRank]');
      });
    });

    describe('when the card to rank is not in the unranked pile', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          likeDrain: ['h7'],
        });
      });

      it('throws the error userResults.rankLikeDrain.cardNotFound', function() {
        expect(
          () => rankLikeDrain.run.call({userId: userId}, {card: 's8', toPosition: 0})
          ).to.throw(Error, '[userResults.rankLikeDrain.cardNotFound]');
      });
    });

    describe('when the card is in the unranked likeDrain pile', function() {
      const userId = Random.id();
      const cardToRank = 'h7';
      let result;

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          likeDrain: [cardToRank],
          likeDrainRanked: ['s5', 's6', 's7'],
        });
        rankLikeDrain.run.call({userId: userId}, {card: cardToRank, toPosition: 1});
        result = UserResults.findOne({ownerUserId: userId});
      });

      it ('places the card into the ranked like drain position', function() {
        const expected = ['s5', cardToRank, 's6', 's7'];
        let match = true;
        for (let i = 0; i < result.likeDrainRanked.length; i++) {
          if (expected[i] !== result.likeDrainRanked[i]) {
            match = false;
          }
        }

        expect(match).to.be.true;
      });

      it('removes the card from the unranked like drain pile', function() {
        expect(result.likeDrain.includes(cardToRank)).to.be.false;
      });
    })
  });
}