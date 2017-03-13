import React, { PropTypes } from 'react';

export default Centre = (props) => {
  return (
    <div className="flex-row">
      <div className="flex-column">
        {props.children}
      </div>
    </div>
  );
}

Centre.propTypes = {
  
}