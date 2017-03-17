import React, { PropTypes } from 'react';

export default Hr = (props) => {
  return (
    <hr className={props.primary ? "short light" : "short primary"} />
  );
}

Hr.propTypes = {
  primary: React.PropTypes.bool.isRequired,
}