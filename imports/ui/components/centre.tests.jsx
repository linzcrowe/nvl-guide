import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Centre from './centre.jsx';

if (Meteor.isClient) {
  describe('ui.components.Centre', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(<Centre />);
    });

    it('renders 1 CentredColumn', function() {
      expect(wrapper.find('CentredColumn').length).to.equal(1);
    });

    it('renders 1 CentredRow', function() {
      expect(wrapper.find('CentredRow').length).to.equal(1);
    });

    describe('when passed children', function() {
      beforeEach(function() {
        wrapper = shallow(
          <Centre>
            <i>text</i>
          </Centre>
        );
      });

      it('renders the children', function() {
        expect(wrapper.contains(<i>text</i>)).to.be.true;
      });
    })
  });
}