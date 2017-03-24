import { Meteor } from 'meteor/meteor';
import React from 'react';
import Sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RankColumn from './rankColumn.jsx';

if (Meteor.isClient) {
  describe('ui.components.RankColumn', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(<RankColumn />);
    });

    it('renders a single div', function() {
      expect(wrapper.find('div').length).to.equal(1);
    });

    it('gives the div the class flex-column', function() {
      expect(wrapper.find('div.flex-column').length).to.equal(1);
    });

    it('gives the div the class flex-column-ranking', function() {
      expect(wrapper.find('div.flex-column-ranking').length).to.equal(1);
    });

    describe('when passed children', function() {
      beforeEach(function() {
        wrapper = shallow(
          <RankColumn>
            <i>text</i>
          </RankColumn>);
      });

      it('renders its children', function() {
        expect(wrapper.contains(<i>text</i>)).to.be.true;
      });
    });
  });
}