import React, { PropTypes } from 'react';
import Centre from './centre.jsx';

export default Card = (props) => {
const cardClasses = "card " + props.classes;

  return (
    <span className={cardClasses}>
      <Centre>
        <div className="card-title">
          {props.title}
        </div>
        <br />
        <div className="card-description">
          {props.description}
        </div>
      </Centre>
    </span>
  );
}

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  classes: React.PropTypes.string.isRequired,
}