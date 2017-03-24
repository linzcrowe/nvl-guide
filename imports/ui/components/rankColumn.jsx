import React, { PropTypes } from 'react';

export default RankColumn = (props) => {
  return (
    <div className="flex-column flex-column-ranking">
      {props.children}
    </div>
  );
}

RankColumn.propTypes = {
}