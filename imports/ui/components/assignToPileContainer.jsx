import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import AssignToPile from './assignToPile.jsx';
import { UserResults } from '../../api/userResults/userResults.js';
import moveToLikeEnergise from '../../api/userResults/moveToLikeEnergise.js';
import moveToLikeDrain from '../../api/userResults/moveToLikeDrain.js';
import moveToNotLike from '../../api/userResults/moveToNotLike.js';
 
export default AssignToPileContainer = createContainer((props) => {
  const errorAlert = (error) => {
    if(error) {
      alert(error.reason);
    }
  }

  return {
    card: props.card,
    onAssignToLikeEnergise: () => moveToLikeEnergise.call(props.card, errorAlert),
    onAssignToLikeDrain: () => moveToLikeDrain.call(props.card, errorAlert),
    onAssignToNotLike: () => moveToNotLike.call(props.card, errorAlert),
  };
}, AssignToPile);

AssignToPileContainer.propTypes = {
  card: PropTypes.string.isRequired,
}