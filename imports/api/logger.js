import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  import winston from "winston";

  export default logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'error' }),
      new (winston.transports.File)({
        filename: 'everything.log',
        level: 'silly'
      })
    ],
  });
}