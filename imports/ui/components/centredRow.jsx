import React, { PropTypes } from 'react';

export default CentredRow = (props) => {
  const wrap = props.wrap ? " flex-row-wrap " : "";

  return (
    <div className={"flex-row " + wrap}>
      {props.children}
    </div>
  );
}

CentredRow.propTypes = {
  wrap: React.PropTypes.bool,
}