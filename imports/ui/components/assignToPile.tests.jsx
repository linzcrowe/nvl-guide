import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AssignToPile from './assignToPile.jsx';
import { idToDetails, CARD_NUMBER, CARD_SUITE, CARD_CATEGORY } from '../cardIdToDetails.js';

if (Meteor.isClient) {
  describe('ui.components.AssignToPile', function() {
    let wrapper;
    const cardRaw = 'ha';
    const cardAsObject = {
        card: CARD_NUMBER.ACE,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.HIGH,
        title: 'Cheerleader',
        description: 'An enthusiastic and vocal supporter of someone or something',
      };
    const dummyFunc = () => true;

    beforeEach(function() {
      wrapper = shallow(
        <AssignToPile
          qualityTitle={cardAsObject.title}
          qualityDescription={cardAsObject.description}
          onAssignToLikeEnergise={dummyFunc}
          onAssignToLikeDrain={dummyFunc}
          onAssignToNotLike={dummyFunc}/>
      );
    });

    it('renders a single div', function() {
      expect(wrapper.find('div').length).to.equal(1);
    });

    it ('renders a single Centre', function() {
      expect(wrapper.find('Centre').length).to.equal(1);
    });

    it('renders the Centre in the div', function() {
      expect(wrapper.find('Centre').parent().is('div')).to.be.true;
    });

    it('renders a single Quality', function() {
      expect(wrapper.find('Quality').length).to.equal(1);
    });

    it('renders the Quality in the Centre', function() {
      expect(wrapper.find('Quality').parent().is('Centre')).to.be.true;
    });

    it('passes the Quality the quality\'s title', function() {
      expect(wrapper.find('Quality').prop('title')).to.equal(cardAsObject.title);
    });

    it('passes the Quality the quality\'s description', function() {
      expect(wrapper.find('Quality').prop('description')).to.equal(cardAsObject.description);
    });

    it('renders 2 CetredRows', function() {
      expect(wrapper.find('CentredRow').length).to.equal(2);
    });

    it('renders the first CentredRow in the div', function() {
      expect(wrapper.find('CentredRow').at(0).parent().is('div')).to.be.true;
    });

    it('renders the second CentredRow in the div', function() {
      expect(wrapper.find('CentredRow').at(1).parent().is('div')).to.be.true;
    });

    it('renders 3 buttons in the first CentredRow', function() {
      const row = wrapper.find('CentredRow').at(0);
      expect(row.children().find('Button').length).to.equal(3);
    });

    it('passes the attribute primary to the first button', function() {
      const button = wrapper.find('CentredRow').at(0).find('Button').at(0);
      expect(button.prop('primary')).to.be.true;
    });

    it('passes the attribute primary to the second button', function() {
      const button = wrapper.find('CentredRow').at(0).find('Button').at(1);
      expect(button.prop('primary')).to.be.true;
    });

    it('passes the attribute primary to the third button', function() {
      const button = wrapper.find('CentredRow').at(0).find('Button').at(2);
      expect(button.prop('primary')).to.be.true;
    });

    // No checks on contents of the buttons as it is flagged to be changed
  });
}