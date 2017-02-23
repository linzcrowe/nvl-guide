/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import moveToShadow from './moveToShadow.js';

if (Meteor.isServer) {
  describe('userResults.methods.moveToShadow', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.moveToShadow.unauthorised', function() {
        expect(() => moveToShadow.run.call({userId: undefined}, '', true))
          .to.throw(Error, '[userResults.moveToShadow.unauthorised]');
      });
    });

    describe('when the user does not have a result', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.moveToShadow.noResult', function() {
        expect(() => moveToShadow.run.call({userId: userId}, '', true))
          .to.throw(Error, '[userResults.moveToShadow.noResult]');
      });
    });

    describe('when the card is not in the remaining pile', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          cardsRemaining: [],
        });
      });

      it('throws the error userResults.moveToShadow.cardNotFound', function() {
        expect(() => moveToShadow.run.call({userId: userId}, 'h2', true))
          .to.throw(Error, '[userResults.moveToShadow.cardNotFound]');
      });
    });

    describe('when the card is in the remaining pile', function() {
      describe('and the card is a shadow', function() {
        describe('and the card goes at the front', function() {
          let card = 'h2';
          let result;

          beforeEach(function() {
            const userId = Random.id();
            resetDatabase();
            Factory.create('userResults.new', {
              ownerUserId: userId,
              cardsRemaining: [card],
            });
            moveToShadow.run.call({userId: userId}, card, true);
            result = UserResults.findOne({ownerUserId: userId});
          });

          it('removes the card from the remaining pile', function() {
            expect(result.cardsRemaining.includes(card)).to.be.false;
          });

          it('adds the card to the front of the shadow pile', function() {
            expect(result.shadow[0]).to.equal(card);
          });
        });

        describe('and the card goes at the back', function() {
          let card = 'h2';
          let result;

          beforeEach(function() {
            const userId = Random.id();
            resetDatabase();
            Factory.create('userResults.new', {
              ownerUserId: userId,
              cardsRemaining: [card],
            });
            moveToShadow.run.call({userId: userId}, card, false);
            result = UserResults.findOne({ownerUserId: userId});
          });

          it('removes the card from the remaining pile', function() {
            expect(result.cardsRemaining.includes(card)).to.be.false;
          });

          it('adds the card to the back of the shadow pile', function() {
            expect(result.shadow[result.shadow.length - 1]).to.equal(card);
          });
        });
      });

      describe('and the card is not a shadow', function() {
        let userId = Random.id();
        let card = 'ha';

        beforeEach(function() {
          resetDatabase();
          Factory.create('userResults.new', {
            cardsRemaining: [card],
            ownerUserId: userId,
          });
        });

        it('throws the error userResults.moveToShadow.notShadow', function() {
          expect(() => moveToShadow.run.call({userId: userId}, card, true))
            .to.throw(Error, '[userResults.moveToShadow.notShadow]');
        });
      });
    });
  });
}
