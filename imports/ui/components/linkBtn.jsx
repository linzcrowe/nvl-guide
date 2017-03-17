import React, { PropTypes } from 'react';

export default LinkBtn = (props) => {
  const size = props.large ? " btn-xl " : " btn-sm ";
  const color = props.primary ? " btn-primary " : " btn-default ";
  const classes = "btn " + size + color;

  return (
    <a href={props.linkTo} className={classes}>
      {props.children}
    </a>
  );
}

LinkBtn.propTypes = {
  primary: React.PropTypes.bool,
  large: React.PropTypes.bool,
  linkTo: React.PropTypes.string.isRequired,
}