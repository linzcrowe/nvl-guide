import React, { PropTypes } from 'react';

export default StartTest = (props) => {
  const dispError = (err, suc) => {
    if (err) {
      alert(JSON.stringify(err));
    }
  };

  if (!props.isLoggedIn) {
    return <p>Please log in to start</p>;
  }

  return (
    <section className="bg-primary">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <div className="section-heading">
              <h2>Steps To Discovery</h2>
              <hr className="short light" />
              <p className="text-faded">
                To discover your NVL Indictor takes just 3 steps.<br/>
                First, you will sorts key words indicating qualities into groups.<br/>
                Then you rank those that are like you and energise you.<br/>
                Lastly, you rank the qualities that drain you.
              </p>
              <button 
                onClick={() => props.onCreate(dispError)}
                id='btnCreateResult' 
                className='btn btn-default btn-xl sr-button'
              >
                Start My Evaluation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

StartTest.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
}