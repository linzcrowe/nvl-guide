/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { UserResults } from '../userResults.js';

Meteor.publish('userResults', function userResultsPublication() {
  // No Id == no logged in user, so we don't return anything.
  if (!this.userId) {
    return this.ready();
  }

  return UserResults.find({
    userId: this.userId,
  }, {
    fields: UserResults.publicFields,
  });
});
