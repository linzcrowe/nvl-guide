import React, { PropTypes } from 'react';

export default AHref = (props) => {
  const size = props.large ? " btn-xl " : " btn-sm ";
  const color = props.primary ? " btn-default " : " btn-primary ";
  const classes = "btn " + size + color;

  return (
    <a href={props.linkTo} className={classes}>
      {props.children}
    </a>
  );
}

AHref.propTypes = {
  primary: React.PropTypes.bool,
  large: React.PropTypes.bool,
  linkTo: React.PropTypes.string.isRequired,
}