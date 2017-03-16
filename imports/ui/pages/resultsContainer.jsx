import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Results from './results.jsx';
import { UserResults } from '../../api/userResults/userResults.js';
import { Meteor } from 'meteor/meteor'
 
export default createContainer(() => {
  let sub = Meteor.subscribe('userResults.private');

  return {
    resultsReady: sub.ready(),
    results: UserResults.find({}).fetch(),
  };
}, Results);