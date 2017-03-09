import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Navigation from './navigation.jsx';

export default NavigationContainer = createContainer((props) => {
  const logoutCallback = (err) => {
    if (err) {
      alert('failed to logout\n' + JSON.stringify(err) );
    } else {
      
    }
  };

  return {
    loggedIn: Meteor.userId() ? true : false,
    onLogOut: () => Meteor.logout(),
  };
}, Navigation); 

NavigationContainer.propTypes = {
}