import React, { PropTypes } from 'react';
import Section from '../components/section.jsx';
import SectionTitle from '../components/sectionTitle.jsx';
import Hr from '../components/hr.jsx';
import Paragraph from '../components/paragraph.jsx';
import AHref from '../components/aHref.jsx';

export default ReduceEnergyDrains = (props) => {
  return (
    <Section>
      <SectionTitle>
        Reduce Energy Drains
      </SectionTitle>
      <Hr />
      <Paragraph>
        We learn things in life that help us thrive.<br />
        Some of them drain our energy, despite their usefulness.<br />
        Learn what yours are so you can minimise them.
      </Paragraph>
      <AHref linkTo={props.whereToNext} primary large>
        Learn More
      </AHref>
    </Section>
  );
}

ReduceEnergyDrains.propTypes = {
  whereToNext: React.PropTypes.string.isRequired,
}