import React, {PropTypes} from 'react';
import StartTestContainer from '../components/startTestContainer.jsx';
import SortIntoPilesContainer from '../layouts/sortIntoPilesContainer.jsx';
import RankLikeEnergiseContainer from '../layouts/rankLikeEnergiseContainer.jsx';
import RankLikeDrainContainer from '../layouts/rankLikeDrainContainer.jsx';
import ShowResultsContainer from '../layouts/showResultsContainer.jsx';
import StageCompleteContainer from '../components/stageCompleteContainer.jsx';
import Stages from '../../api/userResults/stages.js';
import LoadingPage from './loadingPage.jsx';

export default Results = (props) => {
  let body;

  if (!Meteor.userId()) {
    body =
      <div>
        <p>Please <a href="/signup">login / create account</a> to continue.</p>
      </div>;
  }
  else if(!props.resultsReady) {
    console.log("Showing loading page...");
    body = <LoadingPage />
  }
  else if(props.results.length === 0) {
    // User doesn't have a result yet
    body = <StartTestContainer />
  } else {
    console.log('logged in and loaded. showing results');
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
          <ShowResultsContainer
            likeEnergiseRanked={result.likeEnergiseRanked}
            likeDrainRanked={result.likeDrainRanked}
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
          { body }
        </div>
      </div>
      <div className="footer-block" />
    </div>
    );
}

Results.propTypes = {
  resultsReady: React.PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
}