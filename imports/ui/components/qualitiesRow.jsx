import React, { PropTypes } from 'react';
import Quality from './quality.jsx';

export default QualitiesRow = (props) => {
  return (
    <div className="flex-row flex-row-wrap">
      {props.children.map((card, index) => <Quality title={card.title} key={index}/>)}
    </div>
  );
}

QualitiesRow.propTypes = {
}