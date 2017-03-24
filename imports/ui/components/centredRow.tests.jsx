import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CentredRow from './centredRow.jsx';

if (Meteor.isClient) {
  describe('ui.components.CentredRow', function() {
    let wrapper;
    let children = <i>text</i>;

    beforeEach(function() {
      wrapper = shallow(
        <CentredRow>
          {children}
        </CentredRow>);
    });

    it('renders 1 div', function() {
      expect(wrapper.find('div').length).to.equal(1);
    });

    it('the div has the class flex-row', function() {
      expect(wrapper.find('div.flex-row').length).to.equal(1);
    });

    it('renders its children', function() {
      expect(wrapper.find('div').contains(children)).to.be.true;
    });
    
    describe('when passed the attribute wrap', function() {
      beforeEach(function() {
        wrapper = shallow(
          <CentredRow wrap />);
      });

      it('the div has the class flex-row-wrap', function() {
        expect(wrapper.find('div.flex-row-wrap').length).to.equal(1);
      });
    });
  });
}