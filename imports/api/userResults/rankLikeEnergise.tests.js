/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import rankLikeEnergise from './rankLikeEnergise.js';

if (Meteor.isServer) {
  describe('userResults.methods.rankLikeEnergise', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.rankLikeEnergise.unauthorised', function() {
        expect(
          () => rankLikeEnergise.run.call({userId: undefined}, {card: '', toPosition: 0})
          ).to.throw(Error, '[userResults.rankLikeEnergise.unauthorised]');
      });
    });

    describe('when the user does not have a result', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.rankLikeEnergise.noResult', function() {
        expect(
          () => rankLikeEnergise.run.call({userId: userId}, {card: '', toPosition: 0})
          ).to.throw(Error, '[userResults.rankLikeEnergise.noResult]');
      });
    });

    describe('when there are no more likeEnergise cards left', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          likeEnergise: [],
        });
      });

      it('throws the error userResults.rankLikeEnergise.noCardsToRank', function() {
        expect(
          () => rankLikeEnergise.run.call({userId: userId}, {card: '', toPosition: 0})
          ).to.throw(Error, '[userResults.rankLikeEnergise.noCardsToRank');
      });
    });

    describe('when the card to rank is not in the unranked pile', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          likeEnergise: ['h7'],
        });
      });

      it('throws the error userResults.rankLikeEnergise.cardNotFound', function() {
        expect(
          () => rankLikeEnergise.run.call({userId: userId}, {card: 's8', toPosition: 0})
          ).to.throw(Error, '[userResults.rankLikeEnergise.cardNotFound');
      });
    });

    describe('when the card is in the unranked likeEnergise pile', function() {
      const userId = Random.id();
      const cardToRank = 'h7';
      let result;

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          likeEnergise: [cardToRank],
          likeEnergiseRanked: ['s5', 's6', 's7'],
        });
        rankLikeEnergise.run.call({userId: userId}, {card: cardToRank, toPosition: 1});
        result = UserResults.findOne({ownerUserId: userId});
      });

      it ('places the card into the ranked like energise position', function() {
        const expected = ['s5', cardToRank, 's6', 's7'];
        let match = true;
        for (let i = 0; i < result.likeEnergiseRanked.length; i++) {
          if (expected[i] !== result.likeEnergiseRanked[i]) {
            match = false;
          }
        }

        expect(match).to.be.true;
      });

      it('removes the card from the unranked like energise pile', function() {
        expect(result.likeEnergise.includes(cardToRank)).to.be.false;
      });
    })
  });
}