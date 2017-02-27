import React, { PropTypes } from 'react';

export default AssignToPile = (props) => {
  return (
    <div>
      <h1>Assign to Pile</h1>
      <h2>Card to assign</h2>
      <p>{props.card}</p>
      <div>
        <button 
          onClick={props.onAssignToLikeEnergise}>
          Like me & energises me
        </button>
        <button 
          onClick={props.onAssignToLikeDrain}>
          Like me but drains / does not energise me
        </button>
        <button
          onClick={props.onAssignToNotLike}>
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