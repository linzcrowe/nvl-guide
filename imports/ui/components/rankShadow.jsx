import React, {PropTypes} from 'react';

export default RankShadow = (props) => {
  <div>
    <h2>Sort Shadow</h2>
    <p>Is {props.newCard} more like you than {props.existingCard}?</p>
    <button onClick={props.onYes}>Yes</button>
    <button onClick={props.onNo}>No</button>
  </div>
}

RankShadow.propTypes = {
  existingCard: PropTypes.string.isRequired,
  newCard: PropTypes.string.isRequired,
  onYes: PropTypes.func.isRequired,
  onNo: PropTypes.func.isRequired,
}