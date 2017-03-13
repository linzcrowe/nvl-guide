/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { idToDetails } from './cardIdToDetails.js';

if (Meteor.isClient) {
  describe('cardIdToDetails', function() {
    const allCards = [
          'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', // hearts
          'h8', 'h9', 'h10', 'hj', 'hq', 'hk',
          'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', // diamonds
          'd8', 'd9', 'd10', 'dj', 'dq', 'dk',
          'sa', 's2', 's3', 's4', 's5', 's6', 's7', // spades
          's8', 's9', 's10', 'sj', 'sq', 'sk',
          'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', // clubs
          'c8', 'c9', 'c10', 'cj', 'cq', 'ck'];

    for (let index = 0; index < allCards.length; index++) {
      describe('when given the card ' + allCards[index], function() {
        let result;

        beforeEach(function() {
          result = idToDetails(allCards[index]);
        });

        it('returns a matching object', function() {
          expect(result).to.not.be.undefined;
        });

        it('has a defined card property', function() {
          expect(result.card).to.not.be.undefined;
        });

        it('has a defined suite property', function() {
          expect(result.suite).to.not.be.undefined;
        });

        it('has a defined category property', function() {
          expect(result.category).to.not.be.undefined;
        });

        it('has a defined title property', function() {
          expect(result.category).to.not.be.undefined;
        });

        it('has a defined description property', function() {
          expect(result.category).to.not.be.undefined;
        });
      });
    }
  });
}