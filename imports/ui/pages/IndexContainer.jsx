import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Index from './index.jsx';
import { Meteor } from 'meteor/meteor';

export default IndexContainer = createContainer((props) => {
  return {
    whereToNext: Meteor.userId() ? "/results" : "/signup",
  };
}, Index);

IndexContainer.propTypes = {
}