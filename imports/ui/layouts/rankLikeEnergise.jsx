import React, { PropTypes } from 'react';
import RankOneIntoFourLikeEnergiseContainer from '../components/rankOneIntoFourLikeEnergiseContainer.jsx';

export default RankLikeEnergise = (props) => {
  return (
    <div>
      <h1>Rank Like Energise</h1>
      <RankOneIntoFourLikeEnergiseContainer
        first={props.first}
        second={props.second}
        third={props.third}
        fourth={props.fourth}
        toRank={props.toRank}
      />
    </div>
    );
}

RankLikeEnergise.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
  toRank: PropTypes.string.isRequired,
}