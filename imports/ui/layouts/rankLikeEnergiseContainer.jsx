import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import RankLikeEnergise from './rankLikeEnergise.jsx';

export default RankLikeEnergiseContainer = createContainer((props) => {
  if (props.ranked.length < 4) {
    throw new Error('Ranked cards is of insufficient length');
  }
  if (props.toRank.length === 0) {
    throw new Error('No cards left to rank');
  }

  return {
    first: props.ranked[0],
    second: props.ranked[1],
    third: props.ranked[2],
    fourth: props.ranked[3],
    toRank: props.toRank[0],
  };
}, RankLikeEnergise);

RankLikeEnergiseContainer.propTypes = {
  ranked: PropTypes.array.isRequired,
  toRank: PropTypes.array.isRequired,
}