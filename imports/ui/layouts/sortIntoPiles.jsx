import React, {PropTypes} from 'react';
import { isShadowCard } from '../../api/userResults/userResults.js';
import RankShadowContainer from '../components/rankShadowContainer.jsx';
import AssignToPileContainer from '../components/assignToPileContainer.jsx';
import Hr from '../components/hr.jsx';
import CentredRow from '../components/centredRow.jsx';
import Paragraph from '../components/paragraph.jsx';
import Section from '../components/section.jsx';
import SectionTitle from '../components/sectionTitle.jsx';

export default SortIntoPiles = (props) => {
  const cardToSort = props.cardsRemaining[0];
  let brief;
  let layout;

  if (isShadowCard(cardToSort)) {
    brief = 'Select the trait that is most like you';
    layout = 
      <RankShadowContainer 
        existingCard={props.shadowCards[0]}
        newCard={cardToSort} />;
  } else {
    brief = 'Select the category of best-fit for this quality.';
    layout = 
      <AssignToPileContainer 
        card={cardToSort} />;
  }

  return ( /* Did not have section or the bootstrap grids stuff before */
    <Section>
      <SectionTitle>
        Categorise The Qualities
      </SectionTitle>
      <Hr />
      <CentredRow>
        <Paragraph>
          {brief}
        </Paragraph>
      </CentredRow>
      {layout}
    </Section>
  );
}

SortIntoPiles.propTypes = {
  cardsRemaining: PropTypes.array.isRequired,
  shadowCards: PropTypes.array.isRequired,
}