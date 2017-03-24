import React, { PropTypes } from 'react';
import Centre from '../components/centre.jsx';
import Button from '../components/button.jsx';
import CentredRow from '../components/centredRow.jsx';
import Section from '../components/section.jsx';
import SectionTitle from '../components/sectionTitle.jsx';
import Paragraph from '../components/paragraph.jsx';
import Hr from '../components/hr.jsx';

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
    return ( /* May be an error to have the section here */
      <Section>
        <SectionTitle>
          {this.props.title ? this.props.title + " " : ""}Stage Complete
        </SectionTitle>
        <Hr primary/>
        <CentredRow>
          <Paragraph>
            Please click&nbsp;
            <Button primary onClick={() => this.props.onNextStage(callback)}>
              here
            </Button>
            &nbsp;if you are not redirected in a few seconds.
          </Paragraph>
        </CentredRow>
      </Section>
    );
  }
}

StageComplete.propTypes = {
  onNextStage: PropTypes.func.isRequired,
  title: PropTypes.string,
}