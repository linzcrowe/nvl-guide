import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ResultSection from './resultSection.jsx';

export const SECTION_STYLE = {
  PRIMARY: 0,
  SECONADRY: 1,
}

export default ResultSectionContainer = createContainer((props) => {
  let styles;

  switch (props.sectionStyle) {
    case SECTION_STYLE.PRIMARY:
      styles = {
        section: "bg-primary",
        hr: "short light",
        p: "text-faded",
        a: "btn btn-primary btn-xl",
      };
      break;
    case SECTION_STYLE.SECONDARY:
      styles = {
        section: "",
        hr: "short primary",
        p: "text-muted",
        a: "btn btn-default btn-xl",
      };
      break;
    default:
      styles = {};
  }

  return {
    primary: SECTION_STYLE.PRIMARY ? true : false,
    styles: styles,
    titlePrefix: props.titlePrefix,
    title: props.title,
    brief: props.brief,
    cards: props.cards,
    explanation: props.explanation,
    link: props.link,
  };
}, ResultSection);

ResultSectionContainer.propTypes = {
  sectionStyle: React.PropTypes.number.isRequired,
  titlePrefix: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  brief: React.PropTypes.string,
  cards: React.PropTypes.array.isRequired,
  explanation: React.PropTypes.array.isRequired,
  link: React.PropTypes.object,
}