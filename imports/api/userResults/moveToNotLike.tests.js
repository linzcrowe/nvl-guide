/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import { insertUserResult } from './insertUserResult.js';
import moveToNotLike from './moveToNotLike.js';

if (Meteor.isServer) {
  describe('userResults.methods.moveToNotLike', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.moveToNotLike.unauthorised', function() {
        expect(() => moveToNotLike.run.call({userId: undefined}, ''))
          .to.throw(Error, '[userResults.moveToNotLike.unauthorised]');
      });
    });

    describe('when the user does not have a result', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.moveToNotLike.noResult', function() {
        expect(() => moveToNotLike.run.call({userId: userId}, ''))
          .to.throw(Error, '[userResults.moveToNotLike.noResult]');
      });
    });

    describe('when the card is not in the remaining pile', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
        });
      });

      it('throws the error userResults.moveToNotLike.cardNotFound', function() {
        expect(() => moveToNotLike.run.call({userId: userId}, ''))
          .to.throw(Error, '[userResults.moveToNotLike.cardNotFound');
      });
    });

    describe('when the card is in the remaining pile', function() {
      describe('and the card is not a shadow', function() {
        let card = 'ha';
        let result;

        beforeEach(function() {
          const userId = Random.id();
          resetDatabase();
          Factory.create('userResults.new', {
            ownerUserId: userId,
            cardsRemaining: [card],
          });
          moveToNotLike.run.call({userId: userId}, card);
          result = UserResults.findOne({ownerUserId: userId});
        });

        it('removes the card from the remaining pile', function() {
          expect(result.cardsRemaining.includes(card)).to.be.false;
        });

        it('adds the card to the not like pile', function() {
          expect(result.notLike.includes(card)).to.be.true;
        });
      });

      describe('and the card is a shadow', function() {
        let userId = Random.id();
        let card = 'h2';

        beforeEach(function() {
          resetDatabase();
          Factory.create('userResults.new', {
            cardsRemaining: [card],
            ownerUserId: userId,
          });
        });

        it('throws the error userResults.moveToNotLike.shadow', function() {
          expect(() => moveToNotLike.run.call({userId: userId}, card))
            .to.throw(Error, '[userResults.moveToNotLike.shadow');
        });
      });
    });
  });
}