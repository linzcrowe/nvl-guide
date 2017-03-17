import React, { PropTypes } from 'react';

export default Description = (props) => {
  let i = 0;
  return (
    <span>
      {props.children.map(line => {
        i++;
        return (
          <p className={props.primary ? "text-faded" : "text-muted"} key={i}>
            {line}
          </p>);
      })}
    </span>
  );
}

Description.propTypes = {
  primary: React.PropTypes.bool,
}