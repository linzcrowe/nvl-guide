import React, { PropTypes } from 'react';
import CentredRow from './centredRow.jsx';
import CentredColumn from './centredColumn.jsx';

export default Centre = (props) => {
  return (
    <CentredRow>
      <CentredColumn>
        {props.children}
      </CentredColumn>
    </CentredRow>
  );
}

Centre.propTypes = {
  
}