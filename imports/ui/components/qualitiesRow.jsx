import React, { PropTypes } from 'react';
import Quality from './quality.jsx';
import CentredRow from './centredRow.jsx';

export default QualitiesRow = (props) => {
  return (
    <CentredRow wrap>
      {props.children.map((card, index) => <Quality title={card.title} key={index}/>)}
    </CentredRow>
  );
}

QualitiesRow.propTypes = {
}