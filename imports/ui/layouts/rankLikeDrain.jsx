import React, { PropTypes } from 'react';
import RankOneIntoFourLikeDrainContainer from '../components/rankOneIntoFourLikeDrainContainer.jsx';

export default RankLikeDrain = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="section-heading col-lg-8 col-lg-offset-2 text-center">
          <h2>Four Most Draining</h2>
          <hr className="short primary" />
          <RankOneIntoFourLikeDrainContainer
            first={props.first}
            second={props.second}
            third={props.third}
            fourth={props.fourth}
            toRank={props.toRank}
          />
        </div>
      </div>
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