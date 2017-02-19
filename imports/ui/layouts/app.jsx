import React from 'react';
import { Navigation } from '../components/navigation.jsx';
import AccountsUIWrapper from './accountsUIWrapper.jsx';

export const App = ( { children } ) => (
  <div>
    <Navigation />
    <AccountsUIWrapper />
    { children }
  </div>
)