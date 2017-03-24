import React, { PropTypes } from 'react';

export default Quality = (props) => {
  const classes = "card " +
    (props.description ? " card-with-description " : "") +
    (props.slim ? " card-slim " : "card-wide");

  return (
    <span className={classes}>
      <div className="card-title">
        {props.title}
      </div>
      {props.description &&
        <div className="card-description">
          {props.description}
        </div>
      }
    </span>
  );
}

Quality.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  slim: React.PropTypes.bool,
}