import React, {PropTypes} from 'react';
import { isShadowCard } from '../../api/userResults/userResults.js';
import RankShadowContainer from '../components/rankShadowContainer.jsx';
import AssignToPileContainer from '../components/assignToPileContainer.jsx';

export default SortIntoPiles = (props) => {
  let layout = null;
  if (props.cardsRemaining.length === 0) {
    layout =
      <div>
        All done!
        <button 
          onClick={() => props.onSorted()}>
          Click to continue
        </button>
      </div>;
  } else {
    const cardToSort = props.cardsRemaining[0];
    if (isShadowCard(cardToSort)) {
      layout = <RankShadowContainer 
        existingCard={props.shadowCards[0]}
        newCard={cardToSort} />;
    } else {
      layout = <AssignToPileContainer 
        card={cardToSort} />;
    }
  }

  return (
    <div>
      <h1>Sorting cards into piles</h1>
      {layout}
    </div>
    );
}

SortIntoPiles.propTypes = {
  cardsRemaining: PropTypes.array.isRequired,
  shadowCards: PropTypes.array.isRequired,
  onSorted: PropTypes.func.isRequired,
}