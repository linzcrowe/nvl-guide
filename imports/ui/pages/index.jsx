import React from 'react';
import Centre from '../components/centre.jsx';
import IndexIntroduction from '../layouts/indexIntroduction.jsx';
import IncreaseEnergySources from '../layouts/increaseEnergySources.jsx';
import ReduceEnergyDrains from '../layouts/reduceEnergyDrains.jsx';

export default Index = (props) => {
  return (
    <Centre>
      <IndexIntroduction whereToNext={props.whereToNext} />
      <IncreaseEnergySources whereToNext={props.whereToNext} />
      <ReduceEnergyDrains whereToNext={props.whereToNext} />
    </Centre>
  );
}

Index.propTypes = {
  whereToNext: React.PropTypes.string.isRequired
}