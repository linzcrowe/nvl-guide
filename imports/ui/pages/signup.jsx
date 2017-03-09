import React, { PropTypes } from 'react';
import LoginWrapper from '../layouts/loginWrapper.jsx';

export default SignUp = (props) => {
  return (
    <div>
      <div className="navbar-block" />
      <div className="flex-row">
        <LoginWrapper />
      </div>
      <div className="footer-block" />
    </div>
    );
}

SignUp.propTypes = {
}