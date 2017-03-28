import React, { PropTypes } from 'react';

export default Button = (props) => {
  const size = props.large ? " btn-xl " : " btn-sm ";
  const color = props.primary ? " btn-default " : " btn-primary ";
  const classes = "btn " + size + color;

  return (
    <button onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  primary: React.PropTypes.bool,
  large: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
}