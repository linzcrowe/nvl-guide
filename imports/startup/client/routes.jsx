import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../../ui/layouts/app.jsx';
import IndexContainer from '../../ui/pages/indexContainer.jsx';
import ResultsContainer from '../../ui/pages/resultsContainer.jsx';
import NotFound from '../../ui/pages/notFound.jsx';
import SignUp from '../../ui/pages/signup.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ IndexContainer } />
        <Route path="/results" component={ ResultsContainer } />
        <Route path="/signup" component={ SignUp } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});