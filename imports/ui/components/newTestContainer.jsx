import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import insertUserResult from '../../api/userResults/insertUserResult.js';
import NewTest from './newTest.jsx';
import { Meteor } from 'meteor/meteor';

export default createContainer(() => {
  const isLoggedIn = Meteor.userId() !== undefined;
  return {
    isLoggedIn: isLoggedIn,
    onCreate: (callback) => insertUserResult.call({}, callback),
  };
}, NewTest);