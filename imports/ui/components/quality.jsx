import React, { PropTypes } from 'react';
import Centre from './centre.jsx';

export default Quality = (props) => {
  const classes = "card " +
    (props.description ? "" : " card-title-only ") +
    props.classes;

  const description = props.description ?
    <div className="card-description">
      {props.description}
    </div>
    :
    "";

  return (
    <span className={classes}>
      <div className="card-title">
        {props.title}
      </div>
      {description}
    </span>
  );
}

Quality.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  classes: React.PropTypes.string,
}