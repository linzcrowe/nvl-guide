import React from 'react';
import Navigation from '../components/navigation.jsx';
import Footer from '../components/footer.jsx';

export default App = ( { children } ) => (
  <div className="flex-row">
    <div className="flex-column">    
      <Navigation />
      { children }
      <Footer />
    </div>
  </div>
)