import { Meteor } from 'meteor/meteor';
import React from 'react';
import Sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BlurbSection from './blurbSection.jsx';

if (Meteor.isClient) {
  describe('ui.layouts.BlurbSection', function() {
    let wrapper;
    const title = 'test title';
    const description = ['test description'];
    const linkUrl = '/test';
    const linkText = 'test text';

    beforeEach(function() {
      wrapper = shallow(
        <BlurbSection
          title={title}
          description={description}
          linkUrl={linkUrl}
          linkText={linkText} />
      );
    });

    it('renders 1 of the element Section', function() {
      expect(wrapper.find('Section').length).to.equal(1);
    });

    it('renders 1 of the element SectionTitle', function() {
      expect(wrapper.find('SectionTitle').length).to.equal(1);
    });

    it('passes the title as the SectionTitle\'s text', function() {
      expect(wrapper.find('SectionTitle').children().text()).to.equal(title);
    });

    it('renders 1 of the element Hr', function() {
      expect(wrapper.find('Hr').length).to.equal(1);
    });

    describe('when passed a single line description', function() {
      beforeEach(function() {
        wrapper = shallow(
          <BlurbSection
            title={title}
            description={description}
            linkUrl={linkUrl}
            linkText={linkText} />
        );
      });

      it('renders the text in the paragraph', function() {
        expect(wrapper.find('Paragraph').children().contains(description[0])).to.be.true;
      });

      it('does not render any line breaks', function() {
        expect(wrapper.find('Paragraph').children().find('br').length).to.equal(0);
      });
    });

    describe('when passed a multi-line description', function() {
      const multiline = ['line one', 'line two', 'line three'];

      beforeEach(function() {
        wrapper = shallow(
          <BlurbSection
            title={title}
            description={multiline}
            linkUrl={linkUrl}
            linkText={linkText} />
        );
      });

      it('renders it within the paragraph with line breaks', function() {
        const actual = wrapper.find('Paragraph').children();
        let match = true;
        if (actual.length !== 5 ||
          actual.at(0).text() !== multiline[0] ||
          !actual.at(1).is('br') ||
          actual.at(2).text() !== multiline[1] ||
          !actual.at(3).is('br') ||
          actual.at(4).text() !== multiline[2]) 
        {
          match = false;
        }

        expect(match).to.be.true;
      });
    });

    it('renders 1 of the element AHref', function() {
      expect(wrapper.find('AHref').length).to.equal(1);
    });

    it('passes the linkUrl as the AHref linkTo', function() {
      expect(wrapper.find('AHref').prop('linkTo')).to.equal(linkUrl);
    });

    it('passes the linkTitle as the AHref text', function() {
      expect(wrapper.find('AHref').children().text()).to.equal(linkText);
    })
  });
}