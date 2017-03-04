import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import RankShadow from './rankShadow.jsx';
import { UserResults } from '../../api/userResults/userResults.js';
import moveToShadow from '../../api/userResults/moveToShadow.js';
 
export default RankShadowContainer = createContainer((props) => {
  return {
    existingCard: props.existingCard,
    newCard: props.newCard,
    onYes: (callback) => moveToShadow.call({ card: props.newCard, toFront: true }, callback),
    onNo: (callback) => moveToShadow.call({ card: props.newCard, toFront: false }, callback),
  };
}, RankShadow);

RankShadowContainer.propTypes = {
  existingCard: PropTypes.string.isRequired,
  newCard: PropTypes.string.isRequired,
}