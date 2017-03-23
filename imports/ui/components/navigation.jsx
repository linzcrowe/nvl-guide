import React, {PropTypes} from 'react';
import { IndexLink, Link } from 'react-router';

export default Navigation = (props) => {
  const logInOut = props.loggedIn ? 
    <Link to="/" onClick={() => props.onLogOut()} activeClassName="active" >
      Log Out
    </Link>
    :
    <Link to="/signup" activeClassName="active">
      Log In
    </Link>;

  return (
    <nav className="navbar navbar-default navbar-fixed-top affix-top">
      <div className="container-fluid">
        <div className="navbar-header navigation-bar">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-collapse-burger" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            Menu&nbsp;
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <a className="navbar-brand" href="/">Natural vs Learned</a>
        </div>

        <div className="collapse navbar-collapse" id="navigation-collapse-burger">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/results" activeClassName="active" id="linkToResults">My Result</Link></li>
            <li>{ logInOut }</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navigation.PropTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
}