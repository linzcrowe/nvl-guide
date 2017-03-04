import React, { PropTypes } from 'react';

export default RankLikeEnergise = (props) => {
  let layout;
  if (likeEnergise.length < 5) {
    layout = 
      <div>
        No ranking required, not enough cards.
        <button
          onClick={() => props.onNextStage}>
          Progress to next stage
        </button>
      </div>;
  }

  return (<h1>Rank Like Energise Placeholder</h1>);
}

RankLikeEnergise.propTypes = {
  likeEnergise: PropTypes.array.isRequired,
  onNextStage: PropTypes.func.isRequired,
}