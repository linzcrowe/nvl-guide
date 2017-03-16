import React, { PropTypes } from 'react';
import { idToDetails, CARD_CATEGORY,
         CARD_SUITE, CARD_NUMBER } from '../cardIdToDetails.js';
import Card from '../components/card.jsx';
import ResultSectionStyleContainer, 
       {STYLE_RANK, STYLE_NAME} from '../components/resultSectionStyleContainer.jsx';
import ResultSectionCategoryContainer,
       {SECTION_STYLE} from '../components/resultSectionCategoryContainer.jsx';

export default ShowResults = (props) => {
  let sections = [];

  // Create the style sections
  if (props.topShadow.suite === CARD_SUITE.SPADES ||
      props.topShadow.suite === CARD_SUITE.CLUBS) {
    sections.push(
      <ResultSectionStyleContainer
        styleName={STYLE_NAME.RATIONAL}
        styleRank={STYLE_RANK.PRIMARY}
        cards={props.rationalAnalytical.concat([props.topShadow])}
        key={STYLE_NAME.RATIONAL.toString() + STYLE_RANK.PRIMARY.toString()} />);

    if (props.relationalCreative.length > 0) {
      sections.push(
        <ResultSectionStyleContainer
          styleName={STYLE_NAME.RELATIONAL}
          styleRank={STYLE_RANK.SECONDARY}
          cards={props.relationalCreative} 
          key={STYLE_NAME.RELATIONAL.toString() + STYLE_RANK.SECONDARY.toString()}/>);
    }
  } else {
    sections.push(
      <ResultSectionStyleContainer
        styleName={STYLE_NAME.RELATIONAL}
        styleRank={STYLE_RANK.PRIMARY}
        cards={props.relationalCreative.concat([props.topShadow])}
        key={STYLE_NAME.RELATIONAL.toString() + STYLE_RANK.PRIMARY.toString()} />);

    if (props.rationalAnalytical.length > 0) {
      sections.push(
        <ResultSectionStyleContainer
          styleName={STYLE_NAME.RATIONAL}
          styleRank={STYLE_RANK.SECONDARY}
          cards={props.rationalAnalytical}
          key={STYLE_NAME.RATIONAL.toString() + STYLE_RANK.SECONDARY.toString()} />);
    }
  }

  // Create the high and low sections
  let usePrimaryStyle = true;

  // SPADES
  if (props.highSpades.length > 0) {
    sections.push(
      <ResultSectionCategoryContainer
        sectionStyle={usePrimaryStyle ? SECTION_STYLE.PRIMARY : SECTION_STYLE.SECONDARY}
        title="Analyse - Principles"
        cards={props.highSpades}
        explanation={[
          'Values being a sought after expert',
          'Loves to empart knowledge',
          'Can undervalue personal connections',
          'Can appear arrogant']} 
        key="Analyse - Principles" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  if (props.lowSpades.length > 0) {
    sections.push(
      <ResultSectionCategoryContainer
        sectionStyle={usePrimaryStyle ? SECTION_STYLE.PRIMARY : SECTION_STYLE.SECONDARY}
        title="Analyse - Facts"
        cards={props.lowSpades}
        explanation={[
          'Love to gather and analyse',
          'Knowledge is power',
          'Can suffer analysis paralysis, never getting to a decision',
          'Can undervalue personal connections']}
        key="Analyse - Facts" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  // CLUBS
  if (props.highClubs.length > 0) {
    sections.push(
      <ResultSectionCategoryContainer
        sectionStyle={usePrimaryStyle ? SECTION_STYLE.PRIMARY : SECTION_STYLE.SECONDARY}
        title="Manage - Actions"
        cards={props.highClubs}
        explanation={[
          'Competitive and thrives in action',
          'Goal driven and motivated by results',
          'Can forget interpersonal niceties',
          'Can suffer tunnel vision, focusing on urgent over important']}
        key="Manage - Actions" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  if (props.lowClubs.length > 0) {
    sections.push(
      <ResultSectionCategoryContainer
        sectionStyle={usePrimaryStyle ? SECTION_STYLE.PRIMARY : SECTION_STYLE.SECONDARY}
        title="Manage - Plans"
        cards={props.lowClubs}
        explanation={[
          'Loves to plan and organise',
          'Considered dependable and disciplined',
          'Can feel lost without clear direction',
          'Can be resistant to change']}
        key="Manage - Plans" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  // HEARTS
  if (props.highHearts.length > 0) {
    sections.push(
      <ResultSectionCategoryContainer
        sectionStyle={usePrimaryStyle ? SECTION_STYLE.PRIMARY : SECTION_STYLE.SECONDARY}
        title="Engage - Groups"
        cards={props.highHearts}
        explanation={[
          'Highly sociable',
          'Thrives in the spotlight, centre of attention',
          'Can be viewed as opinionated and self centred',
          'Uncomfortable with conflict']}
        key="Engage - Groups" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  if (props.lowHearts.length > 0) {
    sections.push(
      <ResultSectionCategoryContainer
        sectionStyle={usePrimaryStyle ? SECTION_STYLE.PRIMARY : SECTION_STYLE.SECONDARY}
        title="Engage - Individuals"
        cards={props.lowHearts}
        explanation={[
          'Places great value on deep relationships',
          'Highly supportive of those they\'re close to',
          'Can try to please everyone',
          'Can be viewed as weak']}
        key="Engage - Individuals" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  // DIAMONDS
  if (props.highDiamonds.length > 0) {
    sections.push(
      <ResultSectionCategoryContainer
        sectionStyle={usePrimaryStyle ? SECTION_STYLE.PRIMARY : SECTION_STYLE.SECONDARY}
        title="Create - Experiences"
        cards={props.highDiamonds}
        explanation={[
          'Loves entering uncharted territory',
          'Prefers variety over routine',
          'Can be easily distracted',
          'Can fear commitment and procrastinate']}
        key="Create - Experiences" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  if (props.lowDiamonds.length > 0) {
    sections.push(
      <ResultSectionCategoryContainer
        sectionStyle={usePrimaryStyle ? SECTION_STYLE.PRIMARY : SECTION_STYLE.SECONDARY}
        title="Create - Ideas"
        cards={props.lowDiamonds}
        explanation={[
          'Has a knack for creating unique, inventive ideas',
          'Loves to entertain new ideas',
          'Can suffer creative paralysis, forever chasing perfection',
          'Can appear scattered and illogical']}
        key="Create - Ideas" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  return (
    <span>
      {sections}
    </span>
  );
}

ShowResults.PropTypes = {
  topFourEnergising: PropTypes.array.isRequired,
  topFourDraining: PropTypes.array.isRequired,
  rationalAnalytical: PropTypes.array.isRequired,
  relationalCreative: PropTypes.array.isRequired,
  topShadow: PropTypes.object.isRequired,
  highSpades: PropTypes.array.isRequired,
  highClubs: PropTypes.array.isRequired,
  highHearts: PropTypes.array.isRequired,
  highDiamonds: PropTypes.array.isRequired,
  lowSpades: PropTypes.array.isRequired,
  lowClubs: PropTypes.array.isRequired,
  lowHearts: PropTypes.array.isRequired,
  lowDiamonds: PropTypes.array.isRequired,
}