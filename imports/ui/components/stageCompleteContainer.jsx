import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import StageComplete from './stageComplete.jsx'
import incrementStage from '../../api/userResults/incrementStage.js';

export default StageCompleteContainer = createContainer((props) => {
  return {
    onNextStage: (callback) => incrementStage.call({}, callback),
    title: props.title,
  };
}, StageComplete);

StageCompleteContainer.propTypes = {
  title: PropTypes.string,
}