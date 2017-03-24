import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LoginWrapper from './loginWrapper.jsx';

if (Meteor.isClient) {
  describe('ui.layouts.LoginWrapper', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(<LoginWrapper />);
    });

    it('renders 1 of the element Section', function() {
      expect(wrapper.find('Section').length).to.equal(1);
    });

    it('renders 1 of the element Centre', function() {
      expect(wrapper.find('Centre').length).to.equal(1);
    });

    it('renders the Centre in the Section', function() {
      expect(wrapper.find('Centre').parent().is('Section')).to.be.true;
    });

    it('renders 1 of the element Blaze', function() {
      // Blaze element actually comes out as a BlazeComponent
      expect(wrapper.find('BlazeComponent').length).to.equal(1);
    });

    it('passes the Blaze its template', function() {
      expect(wrapper.find('BlazeComponent').prop('template')).to.equal('atForm');
    });
  });
}