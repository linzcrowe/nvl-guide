import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import incrementStage from '../../api/userResults/incrementStage.js';
import SortIntoPiles from './sortIntoPiles.jsx';
 
export default SortIntoPilesContainer = createContainer((props) => {
  return {
    onSorted: (callback) => incrementStage.call({}, callback),
    cardsRemaining: props.cardsRemaining,
    shadowCards: props.shadowCards,
  };
}, SortIntoPiles);

SortIntoPilesContainer.propTypes = {
  cardsRemaining: PropTypes.array.isRequired,
  shadowCards: PropTypes.array.isRequired,
}