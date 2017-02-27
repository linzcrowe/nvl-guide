import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import RankShadow from './rankShadow.jsx';
import { UserResults } from '../../api/userResults/userResults.js';
import moveToShadow from '../../api/userResults/moveToShadow.js';
 
export default RankShadowContainer = createContainer((props) => {
  return {
    existingCard: props.existingCard,
    newCard: props.newCard,
    onYes: (props.newCard) => moveToShadow(card, true),
    onNo: (props.newCard) => moveToShadow(card, false),
  };
}, AssignToPile);

RankShadowContainer.propTypes = {
  existingCard: PropTypes.string.isRequired,
  newCard: PropTypes.string.isRequired,
}