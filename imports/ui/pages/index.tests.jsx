import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Index from './index.jsx';

if (Meteor.isClient) {
  describe('ui.pages.Index', function() {
    let wrapper;
    const url = '/test';

    beforeEach(function() {
      wrapper = shallow(<Index whereToNext={url} />);
    });

    it('renders 1 of the element Centre', function() {
      expect(wrapper.find('Centre').length).to.equal(1);
    });

    it('renders 1 of the element IndexIntroduction', function() {
      expect(wrapper.find('IndexIntroduction').length).to.equal(1);
    });

    it('passes IndexIntroduction whereToNext', function() {
      expect(wrapper.find('IndexIntroduction').prop('whereToNext')).to.equal(url);
    });

    it('renders 1 of the element IncreaseEnergySources', function() {
      expect(wrapper.find('IncreaseEnergySources').length).to.equal(1);
    });

    it('passes IncreaseEnergySources whereToNext', function() {
      expect(wrapper.find('IncreaseEnergySources').prop('whereToNext')).to.equal(url);
    });

    it('renders 1 of the element ReduceEnergyDrains', function() {
      expect(wrapper.find('ReduceEnergyDrains').length).to.equal(1);
    });

    it('passes ReduceEnergyDrains whereToNext', function() {
      expect(wrapper.find('ReduceEnergyDrains').prop('whereToNext')).to.equal(url);
    });
  });
}