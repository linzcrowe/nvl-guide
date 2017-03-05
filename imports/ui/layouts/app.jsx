import React from 'react';
import { Navigation } from '../components/navigation.jsx';

export default App = ( { children } ) => (
  <div>
    <Navigation />
    { children }
  </div>
)