import { Meteor } from 'meteor/meteor';
import React from 'react';
import Sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ResultSection from './resultSection.jsx';
import { idToDetails } from '../cardIdToDetails.js';

if (Meteor.isClient) {
  describe('ui.layouts.ResultSection', function() {
    describe('baseline tests', function() {
      let wrapper;
      const cards = [idToDetails('h3'), idToDetails('h4')];
      const title = 'test';
      const explanation = ['line one', 'line two'];

      beforeEach(function() {
        wrapper = shallow(
          <ResultSection
            title={title}
            cards={cards}
            explanation={explanation} />
        );
      });

      it('renders 1 of the element Section', function() {
        expect(wrapper.find('Section').length).to.equal(1);
      });

      it('renders 1 of the element SectionTitle', function() {
        expect(wrapper.find('SectionTitle').length).to.equal(1);
      });

      it('places the title inside the SectionTitle', function() {
        expect(wrapper.find('SectionTitle').children().text()).to.equal(title);
      });

      it('renders 1 of the element Hr', function() {
        expect(wrapper.find('Hr').length).to.equal(1);
      });

      it('renders 1 of the element CentredRow', function() {
        expect(wrapper.find('CentredRow').length).to.equal(1);
      });

      it('renders 2 of the element Quality', function() {
        expect(wrapper.find('Quality').length).to.equal(2);
      });

      it('passes the title to the first Quality', function() {
        expect(wrapper.find('Quality').at(0).prop('title')).to.equal(cards[0].title);
      });

      it('passes the title to the second Quality', function() {
        expect(wrapper.find('Quality').at(1).prop('title')).to.equal(cards[1].title);
      });

      it('renders 2 of the element Paragraph ', function() {
         expect(wrapper.find('Paragraph').length).to.equal(2);
      });

      it('renders the first line of the explanation in the first paragraph', function() {
        expect(wrapper.find('Paragraph').at(0).children().text()).to.equal(explanation[0]);
      });

      it('renders the second line of the explanation in the second paragraph', function() {
        expect(wrapper.find('Paragraph').at(1).children().text()).to.equal(explanation[1]);
      });

      it('renders 0 of the element AHref', function() {
        expect(wrapper.find('AHref').length).to.equal(0);
      });
    });

    describe('when provided a title prefix', function() {
      let wrapper;
      const cards = [idToDetails('h3'), idToDetails('h4')];
      const prefix = 'prefix';
      const title = 'test';
      const explanation = ['line one', 'line two'];

      beforeEach(function() {
        wrapper = shallow(
          <ResultSection
            titlePrefix={prefix}
            title={title}
            cards={cards}
            explanation={explanation} />
        );
      });

      it('passes the prefix to the SectionTitle', function() {
        expect(wrapper.find('SectionTitle').prop('prefix')).to.equal(prefix);
      });
    });

    describe('when provided a link object', function() {
      let wrapper;
      const cards = [idToDetails('h3'), idToDetails('h4')];
      const title = 'test';
      const explanation = ['line one', 'line two'];
      const link = {
        title: 'link title',
        address: '/blah',
      }

      beforeEach(function() {
        wrapper = shallow(
          <ResultSection
            title={title}
            cards={cards}
            explanation={explanation}
            link={link} />
        );
      });

      it('renders 1 of the element AHref', function() {
        expect(wrapper.find('AHref').length).to.equal(1);
      });

      it('passes the AHref the link.address as the linkTo', function() {
        expect(wrapper.find('AHref').prop('linkTo')).to.equal(link.address);
      });

      it('passes the AHref the link.title as the AHref children', function() {
        expect(wrapper.find('AHref').children().text()).to.equal(link.title);
      });

      it('passes the AHref the attribute large', function() {
        expect(wrapper.find('AHref').prop('large')).to.be.true;
      })
    });

    describe('when provided a brief', function() {
      let wrapper;
      const cards = [idToDetails('h3'), idToDetails('h4')];
      const brief = 'test brief';
      const title = 'test';
      const explanation = ['line one', 'line two'];

      beforeEach(function() {
        wrapper = shallow(
          <ResultSection
            brief={brief}
            title={title}
            cards={cards}
            explanation={explanation} />
        );
      });

      it('renders 3 of the element Paragraph', function() {
        expect(wrapper.find('Paragraph').length).to.equal(3);
      });

      it('renders the brief in the body of the first paragraph', function() {
        expect(wrapper.find('Paragraph').at(0).children().text()).to.equal(brief);
      });
    });

    describe('when passed the attribute primary', function() {
      let wrapper;

      beforeEach(function() {
        const link = {
          title: 'link title',
          address: '/blah',
        };
        wrapper = shallow(
          <ResultSection
            primary
            brief={'test brief'}
            title={'test'}
            cards={[idToDetails('h3'), idToDetails('h4')]}
            explanation={['line one', 'line two']}
            link={link} />
        );
      });

      it('sets the attribute primary on the Section', function() {
        expect(wrapper.find('Section').prop('primary')).to.be.true;
      });

      it('sets the attribute primary on the Hr', function() {
        expect(wrapper.find('Hr').prop('primary')).to.be.true;
      });

      it('sets the attribute primary on all Paragraphs', function() {
        let allSet = true;
        let matching = wrapper.findWhere(
          element => (element.is('Paragraph') && element.prop('primary') === true));
        expect(matching.length).to.equal(3);
      });

      it('sets the attribue primary on the AHref', function() {
        expect(wrapper.find('AHref').prop('primary')).to.be.true;
      });
    });
  });
}