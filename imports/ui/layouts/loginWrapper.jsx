import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';
import Section from '../components/section.jsx';
import Centre from '../components/centre.jsx';

export default LoginWrapper = () => (
  <Section>
    <Centre>
      <Blaze template="atForm" />
    </Centre>
  </Section>
);