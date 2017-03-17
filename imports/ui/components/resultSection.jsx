import React, { PropTypes } from 'react';
import SectionTitle from './sectionTitle.jsx';
import Hr from './hr.jsx';
import Brief from './brief.jsx';
import QualitiesRow from './qualitiesRow.jsx';
import Description from './description.jsx';
import LinkBtn from './linkBtn.jsx';

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
        <Brief primary={isPrimary}>
          {brief}
        </Brief>
      }
      <QualitiesRow>
        {cards}
      </QualitiesRow>
      <Description primary={isPrimary}>
        {explanation}
      </Description>
      {link &&
        <LinkBtn primary={isPrimary} large linkTo={link.address}>
          {link.title}
        </LinkBtn>
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