import React, { PropTypes } from 'react';

export default CentredColumn = (props) => {
  return (
    <div className={"flex-column"}>
      {props.children}
    </div>
  );
}

CentredColumn.propTypes = {
}