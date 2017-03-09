import React from 'react';
import NavigationContainer from '../components/navigationContainer.jsx';
import Footer from '../components/footer.jsx';

export default App = ( { children } ) => (
  <div className="flex-row">
    <div className="flex-column">    
      <NavigationContainer />
      { children }
      <Footer />
    </div>
  </div>
)