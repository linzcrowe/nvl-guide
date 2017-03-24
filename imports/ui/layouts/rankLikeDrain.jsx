import React, { PropTypes } from 'react';
import RankOneIntoFourLikeDrainContainer from '../components/rankOneIntoFourLikeDrainContainer.jsx';
import SectionTitle from '../components/sectionTitle.jsx';
import Hr from '../components/hr.jsx';
import Section from '../components/section.jsx';

export default RankLikeDrain = (props) => {
  return (
    <Section>
      <SectionTitle>
        Four Most Draining
      </SectionTitle>
      <Hr />
      <RankOneIntoFourLikeDrainContainer
        first={props.first}
        second={props.second}
        third={props.third}
        fourth={props.fourth}
        toRank={props.toRank}/>
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