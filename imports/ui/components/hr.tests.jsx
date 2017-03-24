import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Hr from './hr.jsx';

if (Meteor.isClient) {
  describe('ui.components.Hr', function() {
    describe('when not passed the attribute primary', function() {
      let wrapper;

      beforeEach(function() {
        wrapper = shallow(<Hr />)
      });

      it('renders a single hr', function() {
        expect(wrapper.find('hr').length).to.equal(1);
      });

      it('sets the class primary on the hr', function() {
        expect(wrapper.find('hr').hasClass('primary')).to.be.true;
      });

      it('sets the class short on the hr', function() {
        expect(wrapper.find('hr').hasClass('short')).to.be.true;
      });
    });

    describe('when passed the attribute primary', function() {
      let wrapper;

      beforeEach(function() {
        wrapper = shallow(<Hr primary />)
      });

      it('renders 1 of the element hr', function() {
        expect(wrapper.find('hr').length).to.equal(1);
      });

      it('sets the class light on the hr', function() {
        const element = wrapper.find('hr');
        expect(element.hasClass('light')).to.be.true;
      });

      it('sets the class short on the hr', function() {
        const element = wrapper.find('hr');
        expect(element.hasClass('short')).to.be.true;
      });
    });
  });
}