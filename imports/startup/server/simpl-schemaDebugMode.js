import {Meteor} from 'meteor/meteor';

if (Meteor.isDevelopment) {
  // Help debug schema validation failures during development
  import SimpleSchema from 'simpl-schema';
  SimpleSchema.debug = true;
}