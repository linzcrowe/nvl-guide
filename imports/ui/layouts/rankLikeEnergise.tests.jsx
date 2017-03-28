import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RankLikeEnergise from './rankLikeEnergise.jsx';

if (Meteor.isClient) {
  describe('ui.layouts.RankLikeEnergise', function() {
    let wrapper;
    const first = 'h5';
    const second = 'h6';
    const third = 'h7';
    const fourth = 'h8';
    const toRank = 'h9';

    beforeEach(function() {
      wrapper = shallow(
        <RankLikeEnergise
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          toRank={toRank} />);
    });

    it('renders 1 of the element Section', function() {
      expect(wrapper.find('Section').length).to.equal(1);
    });

    it('renders 1 of the element SectionTitle', function() {
      expect(wrapper.find('SectionTitle').length).to.equal(1);
    });

    it('renders 1 of the element Hr', function() {
      expect(wrapper.find('Hr').length).to.equal(1);
    });

    it('renders 1 of the element RankOneIntoFourLikeEnergiseContainer', function() {
      expect(wrapper.find('RankOneIntoFourLikeEnergiseContainer').length).to.equal(1);
    });
  });
}