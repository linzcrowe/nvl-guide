import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import insertUserResult from '../../api/userResults/insertUserResult.js';
import StartTest from './startTest.jsx';
import { Meteor } from 'meteor/meteor';

export default createContainer(() => {
  const isLoggedIn = Meteor.userId() !== undefined;
  return {
    isLoggedIn: isLoggedIn,
    onStart: (callback) => insertUserResult.call({}, callback),
  };
}, StartTest);