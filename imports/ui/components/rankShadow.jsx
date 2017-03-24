import React, {PropTypes} from 'react';
import Centre from './centre.jsx';
import Quality from './quality.jsx';
import { idToDetails } from '../cardIdToDetails.js';
import SpacedRow from './spacedRow.jsx';
import Button from './button.jsx';

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
        <CentredRow>
          <Quality 
            title={existingCard.title} 
            description={existingCard.description} 
            slim />
          <Quality 
            title={newCard.title} 
            description={newCard.description} 
            slim />
        </CentredRow>
        <SpacedRow padding>
          <Button primary onClick={() => props.onSelectExisting(callback)}>
            {existingCard.title}
          </Button>
          <Button primary onClick={() => props.onSelectNew(callback)}>
            {newCard.title}
          </Button>
        </SpacedRow>
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