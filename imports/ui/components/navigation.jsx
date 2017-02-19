import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Introduction</IndexLink></li>
    <li><Link to="/results" activeClassName="active" id="linkToResults">My NVL Results</Link></li>
  </ul>
)