import React, {PropTypes} from 'react';
import { isShadowCard } from '../../api/userResults/userResults.js';
import RankShadowContainer from '../components/rankShadowContainer.jsx';
import AssignToPileContainer from '../components/assignToPileContainer.jsx';

export default SortIntoPiles = (props) => {
  const cardToSort = props.cardsRemaining[0];
  let brief;
  let layout;

  if (isShadowCard(cardToSort)) {
    brief = 'Select the trait that is most like you';
    layout = <RankShadowContainer 
      existingCard={props.shadowCards[0]}
      newCard={cardToSort} />;
  } else {
    brief = 'Select the category of best-fit for this quality.';
    layout = <AssignToPileContainer 
      card={cardToSort} />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="section-heading">
          <h2>Categorise The Qualities</h2>
          <hr className="short primary" />
          <div className="flex-row">
            <p className="text-muted">
              {brief}
            </p>
          </div>
          {layout}
        </div>
      </div>
    </div>
  );
}

SortIntoPiles.propTypes = {
  cardsRemaining: PropTypes.array.isRequired,
  shadowCards: PropTypes.array.isRequired,
  onSorted: PropTypes.func.isRequired,
}