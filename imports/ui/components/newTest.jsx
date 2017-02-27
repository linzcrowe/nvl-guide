import React, { PropTypes } from 'react';
import insertUserResult from '../../api/userResults/insertUserResult.js';

export default NewTest = (props) => {
  const createNewResult = () => {
    insertUserResult.call((error) => {
      if (error) {
        alert(error.reason);
      }
    });
  }

  const start = props.isLoggedIn ?
    <button onClick={ props.onCreate } id='btnCreateResult' className='startTestButton' >
        Start Now
    </button>
    :
    <p>Please log in to start</p>;

  return (
    <div>
      <h2>Start NVL Test</h2>
      <p id='pUserMustLogin'>The NVL test will take you through 3 steps to determine your result.</p>
      {start}
    </div>
  );
}

NewTest.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
}