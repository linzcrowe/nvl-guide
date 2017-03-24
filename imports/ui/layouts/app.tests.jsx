import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './app.jsx';

if (Meteor.isClient) {
  describe('ui.layouts.App', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(<App />);
    });

    it('renders a single Centre', function() {
      expect(wrapper.find('Centre').length).to.equal(1);
    });

    it('renders the Centre at the base', function() {
      expect(wrapper.find('Centre').parents().length).to.equal(0);
    });

    /* TODO: Find a good way to test containers */
    it('renders 1 of the element NavigationContainer');
    it('renders the NavigationContainer as the first child of the Centre');

    it('renders 2 of the element div', function() {
      expect(wrapper.find('div').length).to.equal(2);
    });

    it('sets the class navbar-block on the first div', function() {
      const element = wrapper.find('div').at(0);
      expect(element.hasClass('navbar-block')).to.be.true;
    });

    it('sets the class footer-block on the second div', function() {
      const element = wrapper.find('div').at(1);
      expect(element.hasClass('footer-block')).to.be.true;
    });

    it('renders the Footer as the last child of the Centre', function() {
      const footer = wrapper.find('Centre').children().at(3);
      expect(footer.is('Footer')).to.be.true;
    });
  });
}