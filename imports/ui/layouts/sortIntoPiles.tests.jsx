import { Meteor } from 'meteor/meteor';
import React from 'react';
import Sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SortIntoPiles from './sortIntoPiles.jsx';
import { Factory } from 'meteor/dburles:factory';

if (Meteor.isClient) {
  describe('ui.layouts.SortIntoPiles', function() {

    let wrapper;
    const cardsRemaining = ['h2'];
    const shadowCards = ['h2'];

    beforeEach(function() {
      wrapper = shallow(
        <SortIntoPiles cardsRemaining={['h2']} shadowCards={['s2']} />);
    });

    it('renders 1 of the element Section', function() {
      expect(wrapper.find('Section').length).to.equal(1);
    });

    it('renders 1 of the element SectionTitle', function() {
      expect(wrapper.find('SectionTitle').length).to.equal(1);
    });

    it('renders 1 of the element Hr', function() {
      expect(wrapper.find('Hr').length).to.equal(1);
    });

    it('renders 1 of the element CentredRow', function() {
      expect(wrapper.find('CentredRow').length).to.equal(1);
    });

    it('renders 1 of the element Paragraph', function() {
      expect(wrapper.find('Paragraph').length).to.equal(1);
    });

    describe('when the next card is a shadow', function() {
      const shadow = ['s2'];
      const remaining = ['h2'];

      beforeEach(function() {
        wrapper = shallow(
          <SortIntoPiles cardsRemaining={remaining} shadowCards={shadow} />);
      });

      it('uses the brief about the trait most like you', function() {
        expect(wrapper.find('Paragraph').children().text()).to.contain('most like you');
      });

      it('renders 1 of the element RankShadowContainer', function() {
        expect(wrapper.find('MeteorDataContainer').length).to.equal(1);
      });

      it('passes the RankShadowContainer the top shadow card as existingCard', function() {
        expect(wrapper.find('MeteorDataContainer').prop('existingCard')).to.equal(shadow[0]);
      });

      it('passes the RankShadowContainer the top remaining card as newCard', function() {
        expect(wrapper.find('MeteorDataContainer').prop('newCard')).to.equal(remaining[0]);
      });
    });

    describe('when the next card is not a shadow card', function() {
      const shadow = ['s2'];
      const remaining = ['h10'];

      beforeEach(function() {
        wrapper = shallow(
          <SortIntoPiles cardsRemaining={remaining} shadowCards={shadow} />);
      });

      it('uses the brief about best-fit', function() {
        expect(wrapper.find('Paragraph').children().text()).to.contain('best-fit');
      });

      it('renders 1 of the element AssignToPileContainer', function() {
        expect(wrapper.find('MeteorDataContainer').length).to.equal(1);
      });

      it('passes the AssignToPileContainer the top remaining card as card', function() {
        expect(wrapper.find('MeteorDataContainer').prop('card')).to.equal(remaining[0]);
      });
    });
  });
}