import React, { PropTypes } from 'react';
import Section from '../components/section.jsx';
import SectionTitle from '../components/sectionTitle.jsx';
import Hr from '../components/hr.jsx';
import Paragraph from '../components/paragraph.jsx';
import AHref from '../components/aHref.jsx';

export default BlurbSection = (props) => {
  const primary = props.primary ? true : false;
  const desc = [];
  for (let i = 0; i < props.description.length; i++) {
    desc.push(props.description[i]);
    if (i !== props.description.length - 1) {
      desc.push(<br key={i}/>);
    }
  }

  return (
    <Section primary={primary}>
      <SectionTitle>
        {props.title}
      </SectionTitle>
      <Hr primary={primary}/>
      <Paragraph primary={primary}>
        {desc}
      </Paragraph>
      <AHref linkTo={props.linkUrl} large primary={primary} >
        {props.linkText}
      </AHref>
    </Section>
  );
}

BlurbSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.array.isRequired,
  linkUrl: React.PropTypes.string.isRequired,
  linkText: React.PropTypes.string.isRequired,
  primary: React.PropTypes.bool,
}