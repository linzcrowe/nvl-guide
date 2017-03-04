import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import arrangeLikeEnergise from '../../api/userResults/arrangeLikeEnergise.js';

export default RankLikeEnergiseContainer = createContainer((props) => {
  const moveCardInArray = (card, array, newPosition) => {
    const index = array.indexOf(card);
    if (newPosition > index) {
      return array.splice(index, 1).splice(newPosition - 1, 0, card);
    } else {
      return array.splice(index, 1).splice(newPosition, 0, card)
    }
  }

  return {
    topCards: topCards,
    cardToRank: cardToRank,
    onFirst: (callback) => arrangeLikeEnergise.call({
      card: cardToRank,
      position: 0,
    }, callback),
    onSecond: (callback) => arrangeLikeEnergise.call({
      card: cardToRank,
      position: 1,
    }, callback),
    onThird: (callback) => arrangeLikeEnegise.call({
      card: cardToRank,
      position: 2,
    }, callback),
    onFourth: (callback) => arrangeLikeEnergise.call({
      card: cardTORank,
      position: 3
    }, callback),
    onFifth: (callback) => true;
  };
});

RankLikeEnergiseContaine.propTypes = {
  
}
});