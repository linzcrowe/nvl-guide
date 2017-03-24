import React from 'react';
import NavigationContainer from '../components/navigationContainer.jsx';
import Footer from '../components/footer.jsx';
import Centre from '../components/centre.jsx';

export default App = ( { children } ) => (
  <Centre>
    <NavigationContainer />
    <div className="navbar-block" />
    { children }
    <div className="footer-block" />
    <Footer />
  </Centre>
)