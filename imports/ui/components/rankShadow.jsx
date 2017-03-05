import React, {PropTypes} from 'react';

export default RankShadow = (props) => {
  const callback = (err, suc) => {
    if (err) {
      alert('Error\n' + JSON.stringify(err));
    }
  };

  return (
    <div>
      <h2>Sort Shadow</h2>
      <p>Is {props.newCard} more like you than {props.existingCard}?</p>
      <button 
        onClick={() => props.onYes(callback)}
      >
        Yes
      </button>
      <button 
        onClick={() => props.onNo(callback)}
      >
        No
      </button>
    </div>
    );
}

RankShadow.propTypes = {
  existingCard: PropTypes.string.isRequired,
  newCard: PropTypes.string.isRequired,
  onYes: PropTypes.func.isRequired,
  onNo: PropTypes.func.isRequired,
}