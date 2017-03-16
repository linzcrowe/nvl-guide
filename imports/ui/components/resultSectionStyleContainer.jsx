import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ResultSection from './resultSection.jsx';

export const STYLE_NAME = {
  RATIONAL: 0,
  RELATIONAL: 1,
}

export const STYLE_RANK = {
  PRIMARY: 0,
  SECONDARY: 1,
};

export default ResultSectionStyleContainer = createContainer((props) => {
  let title;
  let explanation;
  
  switch (props.styleName) {
    case STYLE_NAME.RATIONAL:
      title = "Rational and Analytical";
      explanation = [
        "Knowledge and expertise are the cornerstones of your style",
        "You focus on data and results",
        "You are good at finding why things won't work",
        "You put the \"no\" in innovation and you are good at finding why thing's won't work"];
      break;
    case STYLE_NAME.RELATIONAL:
      title = "Relational and Creative";
      explanation = [
        "Experiences and relationships between ideas and people are the cornerstones of your style",
        "You are good at finding new ideas and solutions",
        "You put the \"fun\" in dysfunction.",
        "You suffer from \"oh look, something new and shiny!..\" syndrome"];
      break
    default:
      title = "Unknown";
      explanation = "Unknown";
  }

  let styles;
  let titlePrefix;

  switch (props.styleRank) {
    case STYLE_RANK.PRIMARY:
      styles = {
        section: "bg-primary",
        hr: "short light",
        p: "text-faded",
      };
      titlePrefix = "Primary Style";
      break;
    case STYLE_RANK.SECONDARY:
      styles = {
        section: "",
        hr: "short primary",
        p: "text-muted",
      }
      titlePrefix = "Secondary Style";
      break;
    default:
      titlePrefix = "Unknown";
  }

  return {
    styles: styles,
    titlePrefix: titlePrefix,
    title: title,
    brief: "Your qualities in this group",
    cards: props.cards,
    explanation: explanation,
  };
}, ResultSection);

ResultSectionStyleContainer.propTypes = {
  styleName: React.PropTypes.number.isRequired,
  styleRank: React.PropTypes.number.isRequired,
  cards: React.PropTypes.array.isRequired,
}