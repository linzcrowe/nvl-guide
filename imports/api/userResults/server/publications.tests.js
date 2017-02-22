/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { UserResults } from '../userResults.js';
import { insertUserResult } from '../methods.js';
import './publications.js';

if (Meteor.isServer) {
  describe('userResults', function() {
    describe('publications', function() {
      describe('private', function() {
        describe('when the user does not have any results', function() {
          beforeEach(function() {
            resetDatabase();
          })

          it('returns 0 results', function(done) {
            const collector = new PublicationCollector( {userId: Random.id()} );

            collector.collect('userResults.private', (collections) => {
              expect(collections.userResults.length).to.equal(0);
              done();
            });
          });
        });

        describe('when the user has a single result', function() {
          const userId = Random.id();

          beforeEach(function() {
            resetDatabase();
            insertUserResult.run.call({userId: userId});
          });

          it('returns the result that belongs to this user', function(done) {
            const collector = new PublicationCollector( {userId: userId} );

            collector.collect('userResults.private', (collections) => {
              expect(collections.userResults.length).to.equal(1);
              done();
            });
          });
        });
      });
    });
  });
}