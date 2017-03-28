import React, { PropTypes } from 'react';
import { idToDetails, CARD_SUITE } from '../cardIdToDetails.js';
import ResultSection from '../layouts/resultSection.jsx';
import ResetSection from '../layouts/resetSection.jsx';

export default ShowResults = (props) => {
  let sections = [];
  let usePrimaryStyle = true;

  // Create the style sections
  if (props.topShadow.suite === CARD_SUITE.SPADES ||
      props.topShadow.suite === CARD_SUITE.CLUBS) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        titlePrefix={props.relationalCreative.length > 0 ? "Your Primary Style:": "Your Style:"}
        title="Rational and Analytical"
        cards={props.rationalAnalytical.concat([props.topShadow])}
        explanation={[
        "Knowledge and expertise are the cornerstones of your style",
        "You focus on data and results",
        "You are good at finding why things won't work",
        "You put the \"no\" in innovation and you are good at finding why thing's won't work"]} 
        key="Rational and Analytical" />);
    usePrimaryStyle = !usePrimaryStyle;

    if (props.relationalCreative.length > 0) {
      sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        titlePrefix="Your Secondary Style:"
        title="Relational and Creative"
        cards={props.relationalCreative}
        explanation={[
        "Experiences and relationships between ideas and people are the cornerstones of your style",
        "You are good at finding new ideas and solutions",
        "You put the \"fun\" in dysfunction.",
        "You suffer from easily being distracted"]}
        key="Relational and Creative" />);
      usePrimaryStyle = !usePrimaryStyle;
    }
  } else {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        titlePrefix={props.rationalAnalytical.length > 0 ? "Your Primary Style:": "Your Style:"}
        title="Relational and Creative"
        cards={props.relationalCreative.concat([props.topShadow])}
        explanation={[
        "Experiences and relationships between ideas and people are the cornerstones of your style",
        "You are good at finding new ideas and solutions",
        "You put the \"fun\" in dysfunction.",
        "You suffer from easily being distracted"]}
        key="Relational and Creative" />);
      usePrimaryStyle = !usePrimaryStyle;

    if (props.rationalAnalytical.length > 0) {
      sections.push(
        <ResultSection
          primary={usePrimaryStyle}
          titlePrefix="Your Secondary Style:"
          title="Rational and Analytical"
          cards={props.rationalAnalytical}
          explanation={[
          "Knowledge and expertise are the cornerstones of your style",
          "You focus on data and results",
          "You are good at finding why things won't work",
          "You put the \"no\" in innovation and you are good at finding why thing's won't work"]} 
          key="Rational and Analytical" />);
      usePrimaryStyle = !usePrimaryStyle;
    }
  }

  // Create the high and low sections
  // SPADES
  if (props.highSpades.length > 0) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        title="Analysis & Principles"
        cards={props.highSpades}
        explanation={[
          'You values being a sought-after expert',
          'You loves to empart knowledge',
          'You may undervalue personal connections',
          'You might appear arrogant']} 
        key="Analyse - Principles" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  if (props.lowSpades.length > 0) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        title="Analysis & Facts"
        cards={props.lowSpades}
        explanation={[
          'You love to gather and analyse',
          'For you, knowledge is power',
          'You may suffer analysis paralysis, never quite reaching decisions',
          'You may undervalue personal connections']}
        key="Analyse - Facts" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  // CLUBS
  if (props.highClubs.length > 0) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        title="Management & Actions"
        cards={props.highClubs}
        explanation={[
          'You\'re competitive and thrive in action',
          'You\'re goal driven and motivated by results',
          'You may forget interpersonal niceties',
          'You can suffer tunnel vision, focusing on urgent over important']}
        key="Manage - Actions" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  if (props.lowClubs.length > 0) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        title="Management & Plans"
        cards={props.lowClubs}
        explanation={[
          'You loves to plan and organise',
          'You are considered dependable and disciplined',
          'You can feel lost without clear direction',
          'You may be resistant to change']}
        key="Manage - Plans" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  // HEARTS
  if (props.highHearts.length > 0) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        title="Engagement of Groups"
        cards={props.highHearts}
        explanation={[
          'You are highly sociable',
          'You thrive in the spotlight, being the centre of attention',
          'You may be viewed as opinionated and self centred',
          'You might be uncomfortable with conflict']}
        key="Engage - Groups" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  if (props.lowHearts.length > 0) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        title="Engage of Individuals"
        cards={props.lowHearts}
        explanation={[
          'You place great value on deep relationships',
          'You\'re highly supportive of those you\'re close to',
          'You may try to please everyone',
          'You can be viewed as weak']}
        key="Engage - Individuals" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  // DIAMONDS
  if (props.highDiamonds.length > 0) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        title="To Create & Experience"
        cards={props.highDiamonds}
        explanation={[
          'You love entering uncharted territory',
          'You prefers variety over routine',
          'You can be easily distracted',
          'You may fear commitment and procrastinate']}
        key="Create - Experiences" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  if (props.lowDiamonds.length > 0) {
    sections.push(
      <ResultSection
        primary={usePrimaryStyle}
        title="To Create & Ideate"
        cards={props.lowDiamonds}
        explanation={[
          'You have a knack for creating unique, inventive solutions',
          'You love to entertain new ideas',
          'You may suffer creative paralysis, forever chasing perfection',
          'You can appear scattered and illogical']}
        key="Create - Ideas" />);
    usePrimaryStyle = !usePrimaryStyle;
  }

  sections.push(<ResetSection primary={usePrimaryStyle} />);

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