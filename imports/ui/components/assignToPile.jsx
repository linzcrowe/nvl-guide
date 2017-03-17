import React, { PropTypes } from 'react';
import Quality from './quality.jsx';
import Centre from './centre.jsx';
import { idToDetails } from '../cardIdToDetails.js';

export default AssignToPile = (props) => {
  const callback = (err, suc) => {
    if (err) {
      alert(JSON.stringify(err));
    }
  };

  const card = idToDetails(props.card);
  
  return (
    <div>
      <Centre>
        <Quality 
          title={card.title}
          description={card.description}
          classes="card-wide"
        />
      </Centre>
      <div className='flex-row'>
        <button 
          className='btn btn-primary btn-sm'
          onClick={() => props.onAssignToLikeEnergise(callback)}>
            Like Me
            <br />
            Energises Me
        </button>
        <button 
          className='btn btn-primary btn-sm'
          onClick={() => props.onAssignToLikeDrain(callback)}>
            Like Me
            <br />
            Neutral
        </button>
        <button 
          className='btn btn-primary btn-sm'
          onClick={() => props.onAssignToLikeDrain(callback)}>
            Like Me
            <br />
            Drains Me
        </button>
      </div>
      <div className='flex-row'>
        <button
          className='btn btn-primary btn-sm'
          onClick={() => props.onAssignToNotLike(callback)}>
            Not Like
            <br />
            Me
        </button>
      </div>
    </div>
    );
}

AssignToPile.propTypes = {
  card: PropTypes.string.isRequired,
  onAssignToLikeEnergise: PropTypes.func.isRequired,
  onAssignToLikeDrain: PropTypes.func.isRequired,
  onAssignToNotLike: PropTypes.func.isRequired,
}