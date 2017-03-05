import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import RankOneIntoFour from './rankOneIntoFour.jsx';
import rankLikeDrain from '../../api/userResults/rankLikeDrain.js';

export default RankOneIntoFourLikeDrainContainer = createContainer((props) => {
  return {
    first: props.first,
    second: props.second,
    third: props.third,
    fourth: props.fourth,
    toRank: props.toRank,
    onRankFirst: 
      (callback) => rankLikeDrain.call({card: props.toRank, toPosition: 0}),
    onRankSecond: 
      (callback) => rankLikeDrain.call({card: props.toRank, toPosition: 1}),
    onRankThird: 
      (callback) => rankLikeDrain.call({card: props.toRank, toPosition: 2}),
    onRankFourth: 
      (callback) => rankLikeDrain.call({card: props.toRank, toPosition: 3}),
    onNotInTopFour: 
      (callback) => rankLikeDrain.call({card: props.toRank, toPosition: 4}),
  };
}, RankOneIntoFour);

RankOneIntoFourLikeDrainContainer.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
  toRank: PropTypes.string.isRequired,
}