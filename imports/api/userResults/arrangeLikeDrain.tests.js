/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import arrangeLikeDrain from './arrangeLikeDrain.js';

if (Meteor.isServer) {
  describe('userResults.methods.arrangeLikeDrain', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.arrangeLikeDrain.unauthorised', function() {
        expect(() => arrangeLikeDrain.run.call({userId: undefined}, []))
          .to.throw(Error, '[userResults.arrangeLikeDrain.unauthorised]');
      });
    });

    describe('when the user does not have a result', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.arrangeLikeDrain.noResult', function() {
        expect(() => arrangeLikeDrain.run.call({userId: userId}, []))
          .to.throw(Error, '[userResults.arrangeLikeDrain.noResult]');
      });
    });

    describe('when cards given do not match the existing', function() {
      const existingCards = ['h8', 'h9', 'h10'];
      const newArrangement = ['h9', 'h10', 'ha'];
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          likeDrain: existingCards,
        });
      });

      it('throws the error userResults.arrangeLikeDrain.mismatch', function() {
        expect(() => arrangeLikeDrain.run.call({userId: userId}, newArrangement))
          .to.throw(Error, '[userResults.arrangeLikeDrain.mismatch]');
      });
    });

    describe('when the cards given match the existing', function() {
      const existingCards = ['c7', 'c8', 'h10'];
      const newArrangement = ['h10', 'c7', 'c8'];
      let result;

      beforeEach(function() {
        resetDatabase();
        const userId = Random.id();
        Factory.create('userResults.new', {
          ownerUserId: userId,
          likeDrain: existingCards,
        });
        arrangeLikeDrain.run.call({userId: userId}, newArrangement);
        result = UserResults.findOne({ownerUserId: userId});
      });

      it('accepts the new arrangement', function() {
        let match = true;
        if (newArrangement.length !== result.likeDrain.length) {
          match = false;
        } else {
          for(let i = 0; i < newArrangement.length; i++) {
            if (newArrangement[i] !== result.likeDrain[i]) {
              match = false;
              break;
            }
          }
        }
        
        expect(match).to.be.true;
      });
    });
  });
}