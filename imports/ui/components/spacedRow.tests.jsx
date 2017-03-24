import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SpacedRow from './spacedRow.jsx';

if (Meteor.isClient) {
  describe('ui.components.SpacedRow', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(
        <SpacedRow>
          <i>text</i>
        </SpacedRow>);
    });

    it('renders 1 div', function() {
      expect(wrapper.find('div').length).to.equal(1);
    });

    it('the div has the class flex-row', function() {
      expect(wrapper.find('div.flex-row').length).to.equal(1);
    });

    describe('when not passed the attribute padding', function() {
      it('the div has the class flex-spaced-between', function() {
        expect(wrapper.find('div.flex-spaced-between').length).to.equal(1);
      });
    });
    
    describe('when passed the attribute padding', function() {
      beforeEach(function() {
        wrapper = shallow(
          <SpacedRow padding>
            <i>text</i>
          </SpacedRow>);
      });

      it('the div has the class flex-spaced-around', function() {
        expect(wrapper.find('div.flex-spaced-around').length).to.equal(1);
      });
    });

    it('renders the children', function() {
      expect(wrapper.contains(<i>text</i>)).to.be.true;
    });
  });
}