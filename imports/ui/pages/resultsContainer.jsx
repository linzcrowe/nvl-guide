import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Results from './results.jsx';
import { UserResults } from '../../api/userResults/userResults.js';
 
App.propTypes = {
  result: PropTypes.object.isRequired,
};
 
export default createContainer(() => {
  Meteor.subscribe('userResults.private');

  return {
    result: UserResults.findOne({}),
  };
}, Results);