import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ResultSection from './resultSection.jsx';

export const SECTION_STYLE = {
  PRIMARY: 0,
  SECONADRY: 1,
}

export default ResultSectionCategoryContainer = createContainer((props) => {
  let styles;
  let brief = props.brief || "Your qualities in this group";

  switch (props.sectionStyle) {
    case SECTION_STYLE.PRIMARY:
      styles = {
        section: "bg-primary",
        hr: "short light",
        p: "text-faded",
      };
      titlePrefix = "Primary Style";
      break;
    case SECTION_STYLE.SECONDARY:
      styles = {
        section: "",
        hr: "short primary",
        p: "text-muted",
      };
      titlePrefix = "Secondary Style";
      break;
    default:
      styles = {};
      titlePrefix = "Unknown";
  }

  return {
    styles: styles,
    titlePrefix: undefined,
    title: props.title,
    brief: brief,
    cards: props.cards,
    explanation: props.explanation,
  };
}, ResultSection);

ResultSectionCategoryContainer.propTypes = {
  sectionStyle: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  brief: React.PropTypes.string,
  cards: React.PropTypes.array.isRequired,
  explanation: React.PropTypes.array.isRequired,
}