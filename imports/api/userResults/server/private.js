/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { UserResults } from '../userResults.js';

Meteor.publish('userResults.private', function userResultsPublication() {
  // No Id == no logged in user, so we don't return anything.
  if (!this.userId) {
    return this.ready();
  }

  return UserResults.find({
    ownerUserId: this.userId,
  }, {
    fields: UserResults.publicFields,
  });
});
