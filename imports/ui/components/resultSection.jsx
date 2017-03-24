import React, { PropTypes } from 'react';
import SectionTitle from './sectionTitle.jsx';
import Hr from './hr.jsx';
import Paragraph from './paragraph.jsx';
import AHref from './aHref.jsx';
import CentredRow from './centredRow.jsx';

export default ResultSection = ({
  primary,
  styles, 
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
      {cards.map((card, index) => {
        <CentredRow wrap>
          <Quality title={card.title} key={index} />
        </CentredRow>})
      }
      {explanation.map(exp => 
        <Paragraph primary={isPrimary}>
          {explanation}
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
  styles: React.PropTypes.object.isRequired,
  titlePrefix: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  brief: React.PropTypes.string,
  cards: React.PropTypes.array.isRequired,
  explanation: React.PropTypes.array.isRequired,
  link: React.PropTypes.object,
}