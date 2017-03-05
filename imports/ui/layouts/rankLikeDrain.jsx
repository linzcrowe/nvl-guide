import React, { PropTypes } from 'react';
import RankOneIntoFourLikeDrainContainer from '../components/rankOneIntoFourLikeDrainContainer.jsx';

export default RankLikeDrain = (props) => {
  return (
    <div>
      <h1>Rank Like Drain</h1>
      <RankOneIntoFourLikeDrainContainer
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