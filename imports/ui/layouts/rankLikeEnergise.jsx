import React, { PropTypes } from 'react';
import RankOneIntoFourLikeEnergiseContainer from '../components/rankOneIntoFourLikeEnergiseContainer.jsx';
import Section from '../components/section.jsx';
import SectionTitle from '../components/sectionTitle.jsx';
import Hr from '../components/hr.jsx';

export default RankLikeEnergise = (props) => {
  return (
    <Section>
      <SectionTitle>
        Four Most Energising
      </SectionTitle>
      <Hr/>
      <RankOneIntoFourLikeEnergiseContainer
        first={props.first}
        second={props.second}
        third={props.third}
        fourth={props.fourth}
        toRank={props.toRank}
      />
    </Section>
    );
}

RankLikeEnergise.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
  toRank: PropTypes.string.isRequired,
}