import React, { PropTypes } from 'react';
import SectionTitle from '../components/sectionTitle.jsx';
import Hr from '../components/hr.jsx';
import Paragraph from '../components/paragraph.jsx';
import Button from '../components/button.jsx';
import CentredRow from '../components/centredRow.jsx';
import deleteResult from '../../api/userResults/deleteResult.js';

export default ResetSection = (props) => {
  const isPrimary = props.primary ? true : false;
  const title = "Want to Start Again?";

  const callback = (err, suc) => {
    if (err) {
      alert(JSON.stringify(err));
    }
  }

  return (
    <Section primary={isPrimary} key={title}>
      <SectionTitle>
        {title}
      </SectionTitle>
      <Hr primary={isPrimary} />
      <Button primary={isPrimary} large onClick={() => deleteResult.call({}, callback)}>
        Reset My Result
      </Button>
    </Section>
  );
}

ResetSection.propTypes = {
  primary: React.PropTypes.bool,
}