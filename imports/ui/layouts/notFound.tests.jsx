import { Meteor } from 'meteor/meteor';
import React from 'react';
import Sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotFound from './notFound.jsx';

if (Meteor.isClient) {
  describe('ui.layouts.NotFound', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(<NotFound />);
    });

    it('renders 1 of the element Section', function() {
      expect(wrapper.find('Section').length).to.equal(1);
    });

    it('renders 1 of the element Centre', function() {
      expect(wrapper.find('Centre').length).to.equal(1);
    });

    it('renders 1 of the element NotFound', function() {
      expect(wrapper.find('NotFound').length).to.equal(1);
    });
  });
}