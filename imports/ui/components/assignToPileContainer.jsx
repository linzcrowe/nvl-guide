import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import AssignToPile from './assignToPile.jsx';
import { UserResults } from '../../api/userResults/userResults.js';
import moveToLikeEnergise from '../../api/userResults/moveToLikeEnergise.js';
import moveToLikeDrain from '../../api/userResults/moveToLikeDrain.js';
import moveToNotLike from '../../api/userResults/moveToNotLike.js';
import { idToDetails } from '../cardIdToDetails.js';

export const AssignToPileContainer = (props) => {
  const card = idToDetails(props.card);

  return {
    qualityTitle: card.title,
    qualityDescription: card.description,
    onAssignToLikeEnergise: 
      (callback) => moveToLikeEnergise.call({ card: props.card}, callback),
    onAssignToLikeDrain: 
      (callback) => moveToLikeDrain.call({ card: props.card }, callback),
    onAssignToNotLike: 
      (callback) => moveToNotLike.call({ card: props.card }, callback),
  };
};

export default AssignToPileMeteorContainer = createContainer(AssignToPileContainer, AssignToPile);

AssignToPileMeteorContainer.propTypes = {
  card: PropTypes.string.isRequired,
}