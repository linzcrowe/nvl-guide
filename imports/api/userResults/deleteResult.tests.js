/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import deleteResult from './deleteResult.js';

if (Meteor.isServer) {
  describe('userResults.methods.deleteResult', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.deleteResult.unauthorised', function() {
        expect(() => deleteResult.run.call({userId: undefined}))
          .to.throw(Error, '[userResults.deleteResult.unauthorised]');
      });
    });

    describe('when the user is logged in', function() {
      describe('and the user does not have a result', function() {
        const userId = Random.id();

        beforeEach(function() {
          resetDatabase();
        });

        it('throws the error userResults.deleteResult.noResult', function() {
          expect(() => deleteResult.run.call({userId: userId}))
            .to.throw(Error, '[userResults.deleteResult.noResult]');
        });
      });

      describe('and the user has a result', function() {
        const userId = Random.id();

        beforeEach(function() {
          resetDatabase();
          Factory.create('userResults.new', {
            ownerUserId: userId,
          });
          deleteResult.run.call({userId: userId});
        });

        it('deletes the result', function() {
          let results = UserResults.find({ownerUserId: userId});
          expect(results.count()).to.equal(0);
        });
      });
    });
  });
}