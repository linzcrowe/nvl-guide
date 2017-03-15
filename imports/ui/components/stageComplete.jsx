import React, { PropTypes } from 'react';
import Centre from './centre.jsx';

export default class StageComplete extends React.PureComponent { 
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  callback(err, suc) {
    if (err) {
      alert(JSON.stringify(error));
    }
  }

  componentDidMount() {
    const boundFunc = function () { 
      this.props.onNextStage(this.callback);
    }.bind(this);
    this.timeout = setTimeout(boundFunc, 3000);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <div className="section-heading">
              <h2>{this.props.title ? this.props.title + " " : ""}Stage Complete</h2>
              <hr className="short primary" />
              <div className="flex-row">
                <p className="text-muted">
                  Please click&nbsp;
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => this.props.onNextStage(callback)}>
                    here
                  </button>
                  &nbsp;if you are not redirected in a few seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StageComplete.propTypes = {
  onNextStage: PropTypes.func.isRequired,
  title: PropTypes.string,
}