import React, {PropTypes} from 'react';
import NewTestContainer from '../components/newTestContainer.jsx';
import SortIntoPilesContainer from '../layouts/sortIntoPilesContainer.jsx';
import RankLikeEnergiseContainer from '../layouts/rankLikeEnergiseContainer.jsx';
import RankLikeDrainContainer from '../layouts/rankLikeDrainContainer.jsx';
import ShowResults from '../layouts/showResults.jsx';
import StageCompleteContainer from '../components/stageCompleteContainer.jsx';
import Stages from '../../api/userResults/stages.js';

export default Results = (props) => {
  let body;
  if (!Meteor.userId()) {
    body = <h1>Please login to continue.</h1>
  }
  else if(props.results.length === 0) {
    // User doesn't have a result yet
    body = <NewTestContainer />
  } else {
    const result = props.results[0];

    switch (result.stage) {
      case Stages.SORT:
        if (result.cardsRemaining.length === 0) {
          body = <StageCompleteContainer />;
        }
        else {
          body = 
            <SortIntoPilesContainer 
              cardsRemaining={result.cardsRemaining} 
              shadowCards={result.shadow}
            />;
        }
        break;
      case Stages.RANK_LIKE_ENERGISE:
        // if finished ranking || not enough in the first place to rank
        if (result.likeEnergise.length === 0 ||
            result.likeEnergiseRanked.length < 4) {
          body = <StageCompleteContainer />;
        } else {
          body = 
            <RankLikeEnergiseContainer 
              ranked={result.likeEnergiseRanked}
              toRank={result.likeEnergise}
            />;
        }
        break;
      case Stages.RANK_LIKE_DRAIN:
        // if finished ranking || not enough in the first place to rank
        if (result.likeDrain.length === 0 ||
            result.likeDrainRanked.length < 4) {
          body = <StageCompleteContainer />;
        } else {
          body = 
            <RankLikeDrainContainer
              ranked={result.likeDrainRanked}
              toRank={result.likeDrain}
            />;
        }
        break;
      case Stages.COMPLETE:
        body = 
          <ShowResults
            likeEnergiseRanked={result.likeEnergiseRanked}
            likeDrainRanked={result.likeDrainedRanked}
            shadow={result.shadow} 
          />;
        break;
      default:
        throw new Error('Unknown stage: ' + result.stage);
    }
  }

  return (
    <div>
      <h1>Result</h1>
      { body }
    </div>
    );
}

Results.propTypes = {
  results: PropTypes.array,
}