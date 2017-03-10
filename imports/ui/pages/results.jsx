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
  let header;

  if (!Meteor.userId()) {
    header = "Login Required";
    body =
      <div>
        <p>Please <a href="/signup">login / create account</a> to continue.</p>
      </div>;
  }
  else if(props.results.length === 0) {
    // User doesn't have a result yet
    header = "Start Test";
    body = <NewTestContainer />
  } else {
    const result = props.results[0];

    switch (result.stage) {
      case Stages.SORT:
        if (result.cardsRemaining.length === 0) {
          header = "Stage 1 Complete";
          body = <StageCompleteContainer />;
        }
        else {
          header = "Stage 1: Sort Into Groups";
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
          header = "Stage 2 Complete";
          body = <StageCompleteContainer />;
        } else {
          header = "Stage 2: Rank Group One";
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
          header = "Stage 3 Complete";
          body = <StageCompleteContainer />;
        } else {
          header = "Stage 3: Rank Group Two";
          body = 
            <RankLikeDrainContainer
              ranked={result.likeDrainRanked}
              toRank={result.likeDrain}
            />;
        }
        break;
      case Stages.COMPLETE:
        header = "Your Result";
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
      <div className="navbar-block" />
      <div className="flex-row">
        <div className="flex-column">
          <h1>{ header }</h1>
          { body }
        </div>
      </div>
      <div className="footer-block" />
    </div>
    );
}

Results.propTypes = {
  results: PropTypes.array,
}