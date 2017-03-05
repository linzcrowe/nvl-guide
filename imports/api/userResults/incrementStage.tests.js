/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import incrementStage from './incrementStage.js';
import Stages from './stages.js';

if (Meteor.isServer) {
  describe('userResults.methods.incrementStage', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.incrementStage.unauthorised', function() {
        expect(() => incrementStage.run.call({userId: undefined}))
          .to.throw(Error, '[userResults.incrementStage.unauthorised]');
      });
    });

    describe('when the user does not have a result', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.incrementStage.noResult', function() {
        expect(() => incrementStage.run.call({userId: Random.id()}))
          .to.throw(Error, '[userResults.incrementStage.noResult]');
      });
    });

    describe('when progressing from SORT', function() {
      describe('and there are remaining cards to be sorted', function() {
        const userId = Random.id();

        beforeEach(function() {
          resetDatabase();
          Factory.create('userResults.new', {
            ownerUserId: userId,
            stage: Stages.SORT,
          });
        });

        it('throws the error userResults.incrementStage.cardsRemaining', function() {
          expect(() => incrementStage.run.call({userId: userId}))
            .to.throw(Error, '[userResults.incrementStage.cardsRemaining');
        })
      });

      describe('and all cards have been sorted', function() {
        const userId = Random.id();
        let result;

        beforeEach(function() {
          resetDatabase();
          Factory.create('userResults.new', {
            ownerUserId: userId,
            stage: Stages.SORT,
            cardsRemaining: [],
          });
          incrementStage.run.call({userId: userId});
          result = UserResults.findOne({ownerUserId: userId});
        });

        it('progresses to the next stage', function() {
          expect(result.stage).to.equal(Stages.RANK_LIKE_ENERGISE);
        });
      });
    });

    describe('when progressing from RANK_LIKE_ENERGISE', function() {
      let result;

      beforeEach(function() {
        const userId = Random.id();
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          stage: Stages.RANK_LIKE_ENERGISE,
        });
        incrementStage.run.call({userId: userId});
        result = UserResults.findOne({ownerUserId: userId});
      });

      it('progresses to RANK_LIKE_DRAIN', function() {
        expect(result.stage).to.equal(Stages.RANK_LIKE_DRAIN);
      });
    });

    describe('when progressing from RANK_LIKE_DRAIN', function() {
      let result;

      beforeEach(function() {
        const userId = Random.id();
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          stage: Stages.RANK_LIKE_DRAIN,
        });
        incrementStage.run.call({userId: userId});
        result = UserResults.findOne({ownerUserId: userId});
      });

      it('progresses to COMPLETE', function() {
        expect(result.stage).to.equal(Stages.COMPLETE);
      });
    });

    describe('when result is already at the final stage', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          stage: Stages.COMPLETE,
        });
      });

      it('throws the error userResults.incrementStage.complete', function() {
        expect(() => incrementStage.run.call({userId: userId}))
          .to.throw(Error, '[userResults.incrementStage.complete');
      });
    });
  });
}