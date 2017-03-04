import React, { PropTypes } from 'react';

export default NewTest = (props) => {
  const dispError = (err, suc) => {
    if (err) {
      alert(JSON.stringify(err));
    }
  };

  const start = props.isLoggedIn ?
    <button 
      onClick={() => props.onCreate(dispError)}
      id='btnCreateResult' 
      className='startTestButton'
    >
        Start Now
    </button>
    :
    <p>Please log in to start</p>;

  return (
    <div>
      <h2>Start NVL Test</h2>
      <p>The NVL test will take you through 3 steps to determine your result.</p>
      {start}
    </div>
  );
}

NewTest.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
}