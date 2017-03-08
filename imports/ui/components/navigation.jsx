import React from 'react';
import { IndexLink, Link } from 'react-router';
import AccountsUIWrapper from '../layouts/accountsUIWrapper.jsx';

export default Navigation = () => (
  <nav className="navbar navbar-default navbar-fixed-top affix-top">
    <div className="container-fluid">
      <div className="navbar-header navigation-bar">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-collapse-burger" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          Menu&nbsp;
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <a className="navbar-brand" href="/">NVL Indicator</a>
      </div>

      <div className="collapse navbar-collapse" id="navigation-collapse-burger">
        <ul className="nav navbar-nav navbar-right">
          <li><AccountsUIWrapper /></li>
          <li><IndexLink to="/" activeClassName="active">Intro</IndexLink></li>
          <li><Link to="/results" activeClassName="active" id="linkToResults">My Result</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);