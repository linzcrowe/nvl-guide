import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { UserResults } from './userResults.js';
import moveToLikeEnergise from './moveToLikeEnergise.js';

if (Meteor.isServer) {
  describe('userResults.methods.moveToLikeEnergise', function () {
    describe('when the user is not logged in', function() {
      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.moveToLikeEnergise.unauthorised', function() {
        expect(() => moveToLikeEnergise.run.call({ userId: undefined }, {card: 'h2'}))
          .to.throw(Error, '[userResults.moveToLikeEnergise.unauthorised]');
      });
    });

    describe('when the user does not have a result', function() {
      const userId = Random.id();

      beforeEach(function() {
        resetDatabase();
      });

      it('throws the error userResults.moveToLikeEnergise.noResult', function() {
        expect(() => moveToLikeEnergise.run.call({userId: userId}, {card: 'h2'}))
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
        expect(() => moveToLikeEnergise.run.call({ userId: userId }, {card: card}))
          .to.throw(Error, '[userResults.moveToLikeEnergise.cardNotFound]');
      });
    });

    describe('when the card is in the remaining pile', function() {
      describe('and the card is not a shadow', function() {
        describe('and there are less than four ranked like energise cards', function() {
          const userId = Random.id();
          const card = 'ha';
          let result;

          beforeEach(function() {
            resetDatabase();
            let r = Factory.tree('userResults.new', {
              cardsRemaining: [card],
              ownerUserId: userId,
            });
            let resultId = UserResults.insert(r);
            moveToLikeEnergise.run.call({ userId: userId }, {card: card});
            result = UserResults.findOne(resultId);
          });

          it('removes the card from the remaining pile', function() {
            expect(result.cardsRemaining.includes(card)).to.be.false;
          });

          it('adds the card to the like energise pile', function() {
            expect(result.likeEnergise.includes(card)).to.be.true;
          });

          it('adds the card to the ranked like energise pile', function() {
            expect(result.likeEnergiseRanked.includes(card)).to.be.true;
          });
        });

        describe('and there are four ranked like energise cards', function() {
          const userId = Random.id();
          const card = 'ha';
          let result;

          beforeEach(function() {
            resetDatabase();
            let r = Factory.tree('userResults.new', {
              cardsRemaining: [card],
              likeEnergise: ['s6', 's7', 's8', 's9'],
              likeEnergiseRanked: ['s6', 's7', 's8', 's9'],
              ownerUserId: userId,
            });
            let resultId = UserResults.insert(r);
            moveToLikeEnergise.run.call({ userId: userId }, {card: card});
            result = UserResults.findOne(resultId);
          });

          it('removes the card from the remaining pile', function() {
            expect(result.cardsRemaining.includes(card)).to.be.false;
          });

          it('adds the card to the like energise pile', function() {
            expect(result.likeEnergise.includes(card)).to.be.true;
          });

          it('does not add the card to the ranked like energise pile', function() {
            expect(result.likeEnergiseRanked.includes(card)).to.be.false;
          });
        });
      });

      describe('and the card is a shadow', function() {
        const userId = Random.id();
        const card = 'h2';

        beforeEach(function() {
          resetDatabase();
          Factory.create('userResults.new', {
            cardsRemaining: [card],
            ownerUserId: userId,
          });
        });

        it('throws the error userResults.moveToLikeEnergise.shadowCard', function() {
          expect(() => moveToLikeEnergise.run.call({userId: userId}, {card: card}))
            .to.throw(Error, '[userResults.moveToLikeEnergise.shadow]');
        });
      });
    });
  });
}