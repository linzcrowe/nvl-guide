import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import RankOneIntoFour from './rankOneIntoFour.jsx';
import rankLikeEnergise from '../../api/userResults/rankLikeEnergise.js';

export default RankOneIntoFourLikeEnergiseContainer = createContainer((props) => {
  return {
    first: props.first,
    second: props.second,
    third: props.third,
    fourth: props.fourth,
    toRank: props.toRank,
    onRankFirst: 
      (callback) => rankLikeEnergise.call({card: props.toRank, toPosition: 0}),
    onRankSecond: 
      (callback) => rankLikeEnergise.call({card: props.toRank, toPosition: 1}),
    onRankThird: 
      (callback) => rankLikeEnergise.call({card: props.toRank, toPosition: 2}),
    onRankFourth: 
      (callback) => rankLikeEnergise.call({card: props.toRank, toPosition: 3}),
    onNotInTopFour: 
      (callback) => rankLikeEnergise.call({card: props.toRank, toPosition: 4}),
  };
}, RankOneIntoFour);

RankOneIntoFourLikeEnergiseContainer.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
  toRank: PropTypes.string.isRequired,
}