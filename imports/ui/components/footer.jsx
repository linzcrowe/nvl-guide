import React, { PropTypes } from 'react';

export default Footer = (props) => {
  return (
    <footer className="footer navbar-fixed-bottom">
      <div className="container">
        <hr className="footer"/>
        <p>
          by Lindsey Crowe
          <span className="primary"> - </span>
          <a href="https://github.com/linzcrowe">
            Github
          </a>
          <span className="primary"> - </span>
          <a href="https://www.linkedin.com/in/lindseycrowe/">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
}