import React from 'react';
import { IndexLink, Link } from 'react-router';
import AccountsUIWrapper from '../layouts/accountsUIWrapper.jsx';

export const Navigation = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-collapse-burger" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">NVL Guide</a>
      </div>

      <div className="collapse navbar-collapse" id="navigation-collapse-burger">
        <ul className="nav navbar-nav">
          <li><AccountsUIWrapper /></li>
          <li><IndexLink to="/" activeClassName="active">Intro</IndexLink></li>
          <li><Link to="/results" activeClassName="active" id="linkToResults">My NVL Results</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);