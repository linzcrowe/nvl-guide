import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const UserResults = new Mongo.Collection('userResults');

// Deny all client-side updates since we will be using methods to manage this collection
UserResults.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

UserResults.publicFields = {
  stage: 1,
  cardsRemaining: 1,
  likeEnergise: 1,
  likeDrain: 1,
  notLike: 1,
  shadow: 1,
  ownerUserId: 1,
};