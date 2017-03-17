import React, { PropTypes } from 'react';

export default SectionTitle = (props) => {
  return (
    props.prefix ?
    <h2>
      {props.prefix}
      <br/>
      {props.children}
    </h2>
    :
    <h2>
      {props.children}
    </h2>
  );
}

SectionTitle.propTypes = {
  prefix: React.PropTypes.string,
}