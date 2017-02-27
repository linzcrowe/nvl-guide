import React, {PropTypes} from 'react';
import NewTestContainer from '../components/newTestContainer.jsx';
import SortIntoPiles from '../layouts/sortIntoPiles.jsx';
import RankLikeEnergise from '../layouts/rankLikeEnergise.jsx';
import RankLikeDrain from '../layouts/rankLikeDrain.jsx';
import ShowResults from '../layouts/showResults.jsx';

export default Results = (props) => {
  const heading = <h1>Results</h1>;

  let body;
  if (!Meteor.userId()) {
    body = <h1>User is not logged in</h1>
  }
  else if(props.results.length == 0)
  {
    body = <NewTestContainer />
  } else {
    const result = results[0];

    switch (result.stage) {
      case 0:
        body = 
          <SortIntoPiles 
            cardsRemaining={result.cardsRemaining} 
            shadowCards={result.shadow}
          />;
        break;
      case 1:
        body = <RankLikeEnergise />;
        break;
      case 2:
        body = <RankLikeDrain />;
        break;
      case 3:
        body = <ShowResults />
      default:
        body = <h2>Error - fell through stage switch</h2>
    }
  }

  return (
    <div>
      { heading }
      { body }
    </div>
    );
}

Results.propTypes = {
  results: PropTypes.array,
}