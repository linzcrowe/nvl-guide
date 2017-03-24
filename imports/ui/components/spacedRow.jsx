import React, { PropTypes } from 'react';

export default SpacedRow = (props) => {
  const classes = props.padding ? "flex-spaced-around" : "flex-spaced-between";

  return (
    <div className={"flex-row " + classes}>
      {props.children}
    </div>
  );
}

SpacedRow.propTypes = {
  padding: React.PropTypes.bool,
}