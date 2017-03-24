import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './header.jsx';

if (Meteor.isClient) {
  describe('ui.components.Header', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(<Header />);
    });

    it('renders a single header', function() {
      expect(wrapper.find('header').length).to.equal(1);
    });

    it('renders a single div', function() {
      expect(wrapper.find('div').length).to.equal(1);
    });

    it('renders the div in the header', function() {
      expect(wrapper.find('div').parent().is('header')).to.be.true;
    });

    it('sets the class header-content on the div', function() {
      expect(wrapper.find('div').hasClass('header-content')).to.be.true;
    });
  });
}