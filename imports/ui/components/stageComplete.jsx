import React, { PropTypes } from 'react';

export default StageComplete = (props) => {
  const callback = (err, suc) => {
    if (err) {
      alert(JSON.stringify(error));
    }
  }

  return (
      <div>
        <h2>{props.title ? props.title + " " : ""}Stage Complete</h2>
        <button onClick={() => props.onNextStage(callback)}>
          Progress to the next stage
        </button>
      </div>
    );
}

StageComplete.propTypes = {
  onNextStage: PropTypes.func.isRequired,
  title: PropTypes.string,
}