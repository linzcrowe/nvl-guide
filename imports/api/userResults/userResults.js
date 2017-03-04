import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import 'meteor/dburles:collection-helpers';
import { Random } from 'meteor/random';
import Stages from './stages.js';

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

Factory.define('userResults.new', UserResults, {
  stage: Stages.SORT,
  cardsRemaining: [
        'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', // hearts
        'h8', 'h9', 'h10', 'hj', 'hq', 'hk',
        'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', // diamonds
        'd8', 'd9', 'd10', 'dj', 'dq', 'dk',
        'sa', 's2', 's3', 's4', 's5', 's6', 's7', // spades
        's8', 's9', 's10', 'sj', 'sq', 'sk',
        'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', // clubs
        'c8', 'c9', 'c10', 'cj', 'cq', 'ck'],
  likeEnergise: [],
  likeEnergiseRanked: [],
  likeDrain: [],
  notLike: [],
  shadow: [],
  ownerUserId: Random.id(),
});

UserResults.helpers({
  topShadowCard() {
    return this.shadow[0];
  },
  topRemainingCard() {
    return this.cardsRemaining[0];
  }
});

export const isShadowCard = (card) => {
  const shadowCards = [
    'h2', 'h3', 'h4',
    'd2', 'd3', 'd4',
    's2', 's3', 's4',
    'c2', 'c3', 'c4',
  ];
  return shadowCards.includes( card );
}