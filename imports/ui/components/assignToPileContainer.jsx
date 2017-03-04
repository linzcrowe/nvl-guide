import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import AssignToPile from './assignToPile.jsx';
import { UserResults } from '../../api/userResults/userResults.js';
import moveToLikeEnergise from '../../api/userResults/moveToLikeEnergise.js';
import moveToLikeDrain from '../../api/userResults/moveToLikeDrain.js';
import moveToNotLike from '../../api/userResults/moveToNotLike.js';
 
export default AssignToPileContainer = createContainer((props) => {
  const card = props.card;

  return {
    card: card,
    onAssignToLikeEnergise: (callback) => moveToLikeEnergise.call({ card: card}, callback),
    onAssignToLikeDrain: (callback) => moveToLikeDrain.call({ card: card }, callback),
    onAssignToNotLike: (callback) => moveToNotLike.call({ card: card }, callback),
  };
}, AssignToPile);

AssignToPileContainer.propTypes = {
  card: PropTypes.string.isRequired,
}