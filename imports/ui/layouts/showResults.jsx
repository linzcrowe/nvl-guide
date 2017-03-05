import React, { PropTypes } from 'react';

export default ShowResults = (props) => {
  return (
    <div>
      <h1>Show Results Placeholder</h1>
      <h2>LikeEnergise</h2>
      <p>{props.likeEnergiseRanked}</p>
      <h2>LikeDrain</h2>
      <p>{props.likeDrainRanked}</p>
      <h2>Shadow</h2>
      <p>{props.shadow}</p>
    </div>
    );
}

ShowResults.PropTypes = {
  likeEnergiseRanked: PropTypes.array.isRequired,
  likeDrainRanked: PropTypes.array.isRequired,
  shadow: PropTypes.array.isRequired,
}