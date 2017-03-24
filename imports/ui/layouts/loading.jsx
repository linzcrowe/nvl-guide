import React, { PropTypes } from 'react';
import Centre from '../components/centre.jsx';
import Section from '../components/section.jsx';

export default Loading = (props) => {
  return (
    <Section>
      <Centre>
        <h1>Finding your results...</h1>
      </Centre>
    </Section>
  );
}

Loading.propTypes = {
  
}