import React, { PropTypes } from 'react';
import SectionTitle from '../components/sectionTitle.jsx';
import Hr from '../components/hr.jsx';
import Paragraph from '../components/paragraph.jsx';
import AHref from '../components/aHref.jsx';
import CentredRow from '../components/centredRow.jsx';

export default ResultSection = ({
  primary,
  titlePrefix,
  title,
  brief,
  cards,
  explanation,
  link,
}) => {
  const isPrimary = primary ? true : false;

  return (
    <Section primary={isPrimary} key={title}>
      <SectionTitle prefix={titlePrefix}>
        {title}
      </SectionTitle>
      <Hr primary={isPrimary} />
      {brief &&
        <Paragraph primary={isPrimary}>
          {brief}
        </Paragraph>
      }
      <CentredRow wrap>
        {cards.map((card, index) => <Quality title={card.title} key={index} />)}
      </CentredRow>
      {explanation.map((line, index) => 
        <Paragraph primary={isPrimary} key={index}>
          {line}
        </Paragraph>)
      }
      {link &&
        <AHref primary={isPrimary} large linkTo={link.address}>
          {link.title}
        </AHref>
      }
    </Section>
  );
}

ResultSection.propTypes = {
  primary: React.PropTypes.bool,
  titlePrefix: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  brief: React.PropTypes.string,
  cards: React.PropTypes.array.isRequired,
  explanation: React.PropTypes.array.isRequired,
  link: React.PropTypes.object,
}