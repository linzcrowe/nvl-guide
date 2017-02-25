import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../../ui/layouts/app.jsx';
import Index from '../../ui/pages/index.jsx';
import ResultsContainer from '../../ui/pages/resultsContainer.jsx';
import NotFound from '../../ui/pages/not-found.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/results" component={ ResultsContainer } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});