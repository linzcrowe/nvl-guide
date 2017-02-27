import React, {PropTypes} from 'react';
import UserResults from '../../api/userResults/userResults.js';
import RankShadow from '../components/rankShadow.jsx';
import AssignToPileContainer from '../components/assignToPileContainer.jsx';

export default SortIntoPiles = (props) => {
  const cardToSort = props.cardsRemaining[0];
  const layout = UserResults.helpers.isShadowCard(cardToSort) ?
    <RankShadowContainer 
      existingCard={UserResults.helpers.topShadowCard(props.shadowCards)}
      newCard={cardToSort}
    /> 
    :
    <AssignToPileContainer 
      card={card}
    />;

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
}