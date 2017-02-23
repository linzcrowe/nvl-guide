/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import { insertUserResult, moveToLikeEnergise, moveToLikeDrain } from './methods.js';

if (Meteor.isServer) {
  describe('userResults', function () {
    describe('methods', function () {
      describe('insert', function() {
        describe('when there is no existing result for the user', function() {
          const userId = Random.id();

          beforeEach(function () {
            resetDatabase();
            insertUserResult.run.call({userId: userId});
          });

          it('inserts a single new result', function() {
            const numResults = UserResults.find({ ownerUserId: userId }).count();
            expect(numResults).to.equal(1);
          });
        });

        describe('when there is a single existing result for the user', function() {
          const userId = Random.id();

          beforeEach(function() {
            resetDatabase();
            insertUserResult.run.call({userId: userId});
          });

          it('throws the error userResults.insert.existingResult', function() {
            expect(() => insertUserResult.run.call({userId: userId}))
            .to.throw(Error, '[userResults.insert.existingResult]');
          });
        });

        describe('when the user is not logged in', function() {
          beforeEach(function() {
            resetDatabase();
          });

          it('throws the error userResults.insert.unauthorised', function() {
            expect(() => insertUserResult.run.call({userId: undefined}))
            .to.throw(Error, '[userResults.insert.unauthorised]');
          });
        });

        describe('when there is a single new result for the user', function() {
          const userId = Random.id();
          let result;

          beforeEach(function() {
            resetDatabase();
            insertUserResult.run.call({userId: userId});
            result = UserResults.findOne({ownerUserId: userId});
          });

          it('contains a complete remaining deck', function() {
            expect(result.cardsRemaining.length).to.equal(52);
          });

          it('contains no like energise cards', function() {
            expect(result.likeEnergise.length).to.equal(0);
          });

          it('contains no like drains cards', function() {
            expect(result.likeDrain.length).to.equal(0);
          });

          it('contains no not like cards', function() {
            expect(result.notLike.length).to.equal(0);
          });

          it('starts at the first stage', function() {
            expect(result.stage).to.equal(0);
          });

          it('contains no shadow cards', function() {
            expect(result.shadow.length).to.equal(0);
          });
        });
      });

      describe('moveToLikeEnergise', function() {
        describe('when the user is not logged in', function() {
          beforeEach(function() {
            resetDatabase();
          });

          it('throws the error userResults.moveToLikeEnergise.unauthorised', function() {
            expect(() => moveToLikeEnergise.run.call({ userId: undefined }, 'h2'))
              .to.throw(Error, '[userResults.moveToLikeEnergise.unauthorised]');
          });
        });

        describe('when the user does not have a result', function() {
          const userId = Random.id();

          beforeEach(function() {
            resetDatabase();
          });

          it('throws the error userResults.moveToLikeEnergise.noResult', function() {
            expect(() => moveToLikeEnergise.run.call({userId: userId}, 'h2'))
              .to.throw(Error, '[userResults.moveToLikeEnergise.noResult]');
          });
        });

        describe('when the card is not in the remaining pile', function() {
          const userId = Random.id();
          let card;
          let resultId;

          beforeEach(function() {
            resetDatabase();
            let r = Factory.tree('userResults.new', {
              ownerUserId: userId,
            });
            card = r.cardsRemaining.pop();
            resultId = UserResults.insert(r);
          });

          it('throws the error userResults.moveToLikeEnergise.cardNotFound', function() {
            expect(() => moveToLikeEnergise.run.call({ userId: userId }, card))
              .to.throw(Error, '[userResults.moveToLikeEnergise.cardNotFound]');
          });
        });

        describe('when the card is in the remaining pile', function() {
          const userId = Random.id();
          const card = 'h2';
          let result;

          beforeEach(function() {
            resetDatabase();
            let r = { 
              stage: 0,
              cardsRemaining: [],
              likeEnergise: [],
              likeDrain: [],
              notLike: [],
              shadow: [],
              ownerUserId: userId,
            };
            r.cardsRemaining.push(card);
            let resultId = UserResults.insert(r);
            moveToLikeEnergise.run.call({ userId: userId }, card);
            result = UserResults.findOne(resultId);
          });

          it('removes the card from the remaining pile', function() {
            expect(result.cardsRemaining.includes(card)).to.be.false;
          });

          it('adds the card to the like energise pile', function() {
            expect(result.likeEnergise.includes(card)).to.be.true;
          });
        });
      });

      describe('moveToLikeDrain', function() {
        describe('when the user is not logged in', function() {
          beforeEach(function() {
            resetDatabase();
          });

          it('throws the error userResults.moveToLikeDrain.unauthorised', function() {
            expect(() => moveToLikeDrain.run.call({userId: undefined}, 'h2'))
              .to.throw(Error, '[userResults.moveToLikeDrain.unauthorised]');
          });
        });

        describe('when the user does not have a result', function() {
          const userId = Random.id();

          beforeEach(function() {
            resetDatabase();
          });

          it('throws the error userResults.moveToLikeDrain.noResult', function() {
            expect(() => moveToLikeDrain.run.call({userId: userId}, 'h2'))
              .to.throw(Error, '[userResults.moveToLikeDrain.noResult]');
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

          it('throws the error userResults.moveToLikeDrain.cardNotFound', function() {
            expect(() => moveToLikeDrain.run.call({userId: userId}, ''))
              .to.throw(Error, '[userResults.moveToLikeDrain.cardNotFound');
          });
        });

        describe('when the card is in the remaining pile', function() {
          let card;
          let result;

          beforeEach(function() {
            const userId = Random.id();
            resetDatabase();
            Factory.create('userResults.new', {
              ownerUserId: userId,
            });
            card = UserResults.findOne({ownerUserId: userId}).cardsRemaining[0];
            moveToLikeDrain.run.call({userId: userId}, card);
            result = UserResults.findOne({ownerUserId: userId});
          });

          it('removes the card from the remaining pile', function() {
            expect(result.cardsRemaining.includes(card)).to.be.false;
          });

          it('adds the card to the like drain pile', function() {
            expect(result.likeDrain.includes(card)).to.be.true;
          });
        });
      });
    });
  });
}