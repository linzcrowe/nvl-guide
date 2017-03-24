import { Meteor } from 'meteor/meteor';
import React from 'react';
import Sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import IndexIntroduction from './indexIntroduction.jsx';

if (Meteor.isClient) {
  describe('ui.layouts.IndexIntroduction', function() {
    let wrapper;
    const url = '/test';

    beforeEach(function() {
      wrapper = shallow(<IndexIntroduction whereToNext={url} />);
    });

    it('renders 1 of the element Header', function() {
      expect(wrapper.find('Header').length).to.equal(1);
    });

    it('renders 1 of the element div', function() {
      expect(wrapper.find('div').length).to.equal(1);
    });

    it('sets the div class to header-content-inner', function() {
      expect(wrapper.find('div').hasClass('header-content-inner')).to.be.true;
    });

    it('the div has 4 children, the remaining elements', function() {
      expect(wrapper.find('div').children().length).to.equal(4);
    });

    it('renders 1 of the element h1', function() {
      expect(wrapper.find('h1').length).to.equal(1);
    });

    it('renders 1 of the element Hr', function() {
      expect(wrapper.find('Hr').length).to.equal(1);
    });

    it('renders 1 of the element Paragraph', function() {
      expect(wrapper.find('Paragraph').length).to.equal(1);
    });

    it('sets the attribute primary on the Paragraph', function() {
      const element = wrapper.find('Paragraph');
      expect(element.prop('primary')).to.be.true;
    });

    it('renders 1 of the element AHref', function() {
      expect(wrapper.find('AHref').length).to.equal(1);
    });

    it('sets the attribute primary on the AHref', function() {
      expect(wrapper.find('AHref').prop('primary')).to.be.true;
    });

    it('sets the attribute large on the AHref', function() {
      expect(wrapper.find('AHref').prop('large')).to.be.true;
    })

    it('sets the attribute linkTo on the AHref to whereToNext', function() {
      expect(wrapper.find('AHref').prop('linkTo')).to.equal(url);
    })
  });
}