import React, { PropTypes } from 'react';
import BlurbSection from './blurbSection.jsx';

export default IncreaseEnergySources = (props) => {
  const description = [
    'We\'re born with things that are natural to do and be.',
    'Find out what yours are so you can focus on them.',
    'End your days feeling more happy and energetic.']

  return (
    <BlurbSection 
      primary
      title='Increase Energy Sources'
      description={description}
      linkUrl={props.whereToNext}
      linkText='Find Out More' />
  );
}

IncreaseEnergySources.propTypes = {
  whereToNext: React.PropTypes.string.isRequired,
}