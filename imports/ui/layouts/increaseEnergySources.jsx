import React, { PropTypes } from 'react';
import Section from '../components/section.jsx';
import SectionTitle from '../components/sectionTitle.jsx';
import Hr from '../components/hr.jsx';
import Paragraph from '../components/paragraph.jsx';
import AHref from '../components/aHref.jsx';

export default IncreaseEnergySources = (props) => {
  return (
    <Section primary>
      <SectionTitle>
        Increase Energy Sources
      </SectionTitle>
      <Hr primary/>
      <Paragraph primary>
        We're born with things that are natural to do and be.<br />
        Find out what yours are so you can focus on them.<br />
        End your days feeling more happy and energetic.
      </Paragraph>
      <AHref linkTo={whereToNext} large>
        Find Out More
      </AHref>
    </Section>
  );
}

IncreaseEnergySources.propTypes = {
  whereToNext: React.PropTypes.string.isRequired,
}