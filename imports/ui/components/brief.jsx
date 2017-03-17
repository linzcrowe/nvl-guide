import React, { PropTypes } from 'react';

export default Brief = (props) => {
  return (
    <p className={props.primary ? "text-faded" : "text-muted"}>
      {props.children}
    </p>
  );
}

Brief.propTypes = {
  primary: React.PropTypes.bool,
}