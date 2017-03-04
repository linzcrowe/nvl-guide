import React, { PropTypes } from 'react';

export default AssignToPile = (props) => {
  const callback = (err, suc) => {
    if (err) {
      alert(JSON.stringify(err));
    }
  };
  
  return (
    <div>
      <h1>Assign to Pile</h1>
      <h2>Card to assign</h2>
      <p>{props.card}</p>
      <div>
        <button 
          onClick={() => props.onAssignToLikeEnergise(callback)}>
          Like me & energises me
        </button>
        <button 
          onClick={() => props.onAssignToLikeDrain(callback)}>
          Like me but drains / does not energise me
        </button>
        <button
          onClick={() => props.onAssignToNotLike(callback)}>
          Not like me
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