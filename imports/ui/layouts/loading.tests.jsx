import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loading from './loading.jsx';

if (Meteor.isClient) {
  describe('ui.layouts.Loading', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(<Loading />);
    });

    it('renders 1 of the element Section', function() {
      expect(wrapper.find('Section').length).to.equal(1);
    });

    it('renders 1 of the element Centre', function() {
      expect(wrapper.find('Centre').length).to.equal(1);
    });

    it('renders the Centre inside the Section', function() {
      expect(wrapper.find('Centre').parent().is('Section')).to.be.true;
    });

    it('renders 1 of the element h1', function() {
      expect(wrapper.find('h1').length).to.equal(1);
    });

    it('renders the h1 inside the Centre', function() {
      expect(wrapper.find('h1').parent().is('Centre')).to.be.true;
    });
  });
}