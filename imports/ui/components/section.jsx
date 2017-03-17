import React, { PropTypes } from 'react';

export default Section = (props) => {
  return (
    <section className={props.primary && "bg-primary"} key={props.uniqueId}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <div className="section-heading">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Section.propTypes = {
  primary: React.PropTypes.bool,
  uniqueId: React.PropTypes.string,
}