import React, { PropTypes } from 'react';
import Section from '../components/section.jsx'
import Button from '../components/button.jsx';
import Hr from '../components/hr.jsx';
import Paragraph from '../components/paragraph.jsx';

export default StartTest = (props) => {
  const dispError = (err, suc) => {
    if (err) {
      alert(JSON.stringify(err));
    }
  };

  if (!props.isLoggedIn) {
    return (
      <Section primary>
        <Paragraph primary>
          Please log in to continue
        </Paragraph>
      </Section>);
  }

  return (
    <Section primary>
      <h2>Steps To Discovery</h2>
      <Hr primary />
      <Paragraph primary>
        To discover your NVL Indictor takes just 3 steps.<br/>
        First, you will sorts key words indicating qualities into groups.<br/>
        Then you rank those that are like you and energise you.<br/>
        Lastly, you rank the qualities that drain you.
      </Paragraph>
      <Button large onClick={() => props.onStart(dispError)}>
        Start My Evaluation
      </Button>
    </Section>
  );
}

StartTest.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
}