import React, { PropTypes } from 'react';
import NotFound from '../components/notFound.jsx';
import Section from '../components/section.jsx';
import Centre from '../components/centre.jsx';

export default NotFound = (props) => {
  return (
    <Section>
      <Centre>
        <NotFound />
      </Centre>
    </Section>
  );
}

NotFound.propTypes = {
  
}