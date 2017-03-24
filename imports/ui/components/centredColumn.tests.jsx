import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CentredColumn from './centredColumn.jsx';

if (Meteor.isClient) {
  describe('ui.components.CentredColumn', function() {
    let wrapper;
    let children = <i>text</i>;

    beforeEach(function() {
      wrapper = shallow(
        <CentredColumn>
          {children}
        </CentredColumn>);
    });

    it('renders 1 div', function() {
      expect(wrapper.find('div').length).to.equal(1);
    });

    it('the div has the class flex-column', function() {
      expect(wrapper.find('div.flex-column').length).to.equal(1);
    });

    it('renders its children', function() {
      expect(wrapper.find('div').contains(children)).to.be.true;
    });
  });
}