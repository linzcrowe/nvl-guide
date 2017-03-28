import React, { PropTypes } from 'react';
import BlurbSection from './blurbSection.jsx';

export default ReduceEnergyDrains = (props) => {
  const description = [
    'We learn things in life that help us thrive.',
    'Some of them drain our energy, despite their usefulness.',
    'Learn what yours are so you can minimise them.'];

  return (
    <BlurbSection
      title='Reduce Energy Drains'
      description={description}
      linkUrl={props.whereToNext}
      linkText='Learn More' />
  );
}

ReduceEnergyDrains.propTypes = {
  whereToNext: React.PropTypes.string.isRequired,
}