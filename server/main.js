import { Meteor } from 'meteor/meteor';
import '../imports/startup/server/index.js';
import Logger from '../imports/api/logger.js';

Meteor.startup(() => {
  // code to run on server at startup
  Logger.info('Starting server');
});
