import React, { PropTypes } from 'react';

export default Paragraph = (props) => {
  return (
    <p className={props.primary ? "text-faded" : "text-muted"}>
      {props.children}
    </p>
  );
}

Paragraph.propTypes = {
  primary: React.PropTypes.bool,
}