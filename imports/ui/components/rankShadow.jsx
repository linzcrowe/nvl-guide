import React, {PropTypes} from 'react';
import Centre from './centre.jsx';
import { idToDetails } from '../cardIdToDetails.js';

export default RankShadow = (props) => {
  const callback = (err, suc) => {
    if (err) {
      alert('Error\n' + JSON.stringify(err));
    }
  };

  const existingCard = idToDetails(props.existingCard);
  const newCard = idToDetails(props.newCard);

  return (
    <div>
      <Centre>
        <div className="flex-row">
          <Card title={existingCard.title} description={existingCard.description} classes="card-slim" />
          <Card title={newCard.title} description={newCard.description} classes="card-slim" />
        </div>
        <div className="flex-row flex-row-spaced">
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => props.onSelectExisting(callback)}>
            {existingCard.title}
          </button>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => props.onSelectNew(callback)}>
            {newCard.title}
          </button>
        </div>
      </Centre>
    </div>
    );
}

RankShadow.propTypes = {
  existingCard: PropTypes.string.isRequired,
  newCard: PropTypes.string.isRequired,
  onSelectExisting: PropTypes.func.isRequired,
  onSelectNew: PropTypes.func.isRequired,
}