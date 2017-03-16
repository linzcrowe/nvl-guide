import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ShowResults from './showResults.jsx';
import { idToDetails, CARD_CATEGORY, CARD_SUITE } from '../cardIdToDetails.js';

export default ShowResultsContainer = createContainer((props) => {
  const topFourEnergising = 
    props.likeEnergiseRanked.slice(0, 4)
    .map((card) => idToDetails(card));

  const topFourDraining = 
    props.likeDrainRanked.slice(0, 4)
    .map((card) => idToDetails(card));

  const topShadow = idToDetails(props.shadow[0]);

  // Find the styles
  const rationalAnalytical = 
      topFourEnergising.filter((card) => {
        return (card.suite === CARD_SUITE.SPADES || 
          card.suite === CARD_SUITE.CLUBS);
      });
    
  const relationalCreative = 
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.HEARTS || 
        card.suite === CARD_SUITE.DIAMONDS);
    });

  // Find the high cards
  const highSpades =
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.SPADES && 
        card.category === CARD_CATEGORY.HIGH);
    });

  const highClubs =
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.CLUBS && 
        card.category === CARD_CATEGORY.HIGH);
    });

  const highHearts =
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.HEARTS && 
        card.category === CARD_CATEGORY.HIGH);
    });

  const highDiamonds =
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.DIAMONDS && 
        card.category === CARD_CATEGORY.HIGH);
    });

  // Find the low cards
  const lowSpades =
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.SPADES && 
        card.category === CARD_CATEGORY.LOW);
    });

  const lowClubs =
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.CLUBS && 
        card.category === CARD_CATEGORY.LOW);
    });

  const lowHearts =
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.HEARTS && 
        card.category === CARD_CATEGORY.LOW);
    });

  const lowDiamonds =
    topFourEnergising.filter((card) => {
      return (card.suite === CARD_SUITE.DIAMONDS && 
        card.category === CARD_CATEGORY.LOW);
    });

  return {
    topFourEnergising: topFourEnergising,
    topFourDraining: topFourDraining,
    rationalAnalytical: rationalAnalytical,
    relationalCreative: relationalCreative,
    topShadow: topShadow,
    highSpades: highSpades,
    highClubs: highClubs,
    highHearts: highHearts,
    highDiamonds: highDiamonds,
    lowSpades: lowSpades,
    lowClubs: lowClubs,
    lowHearts: lowHearts,
    lowDiamonds: lowDiamonds,
  };
}, ShowResults);

ShowResultsContainer.propTypes = {
  likeEnergiseRanked: PropTypes.array.isRequired,
  likeDrainRanked: PropTypes.array.isRequired,
  shadow: PropTypes.array.isRequired,
}