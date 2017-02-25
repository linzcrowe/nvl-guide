/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import moveToLikeDrain from './moveToLikeDrain.js';

if (Meteor.isServer) {
  describe('userResults.methods.moveToLikeDrain', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.moveToLikeDrain.unauthorised', function() {
        expect(() => moveToLikeDrain.run.call({userId: undefined}, ''))
          .to.throw(Error, '[userResults.moveToLikeDrain.unauthorised]');
      });
    });

    describe('when the user does not have a result', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.moveToLikeDrain.noResult', function() {
        expect(() => moveToLikeDrain.run.call({userId: userId}, ''))
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
}