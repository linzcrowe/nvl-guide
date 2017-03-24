import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Paragraph from './paragraph.jsx';

if (Meteor.isClient) {
  describe('ui.components.Brief', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = shallow(<Paragraph />);
    });

    it('renders a p at the base', function() {
      expect(wrapper.find('p').length).to.equal(1);
    });

    describe('when passed the primary attribute', function() {
      beforeEach(function() {
        wrapper = shallow(<Paragraph primary />);
      });

      it('styles p with the text-faded class', function() {
        expect(wrapper.contains(<p className="text-faded"/>)).to.be.true;
      });
    });

    describe('when not passed the primary attribute', function() {
      beforeEach(function() {
        wrapper = shallow(<Paragraph />);
      });

      it ('styles p with the text-muted class', function() {
        expect(wrapper.contains(<p className="text-muted"/>)).to.be.true;
      });
    });

    describe('when passed children', function() {
      beforeEach(function() {
        wrapper = shallow(
          <Paragraph>
            <i>text</i>
          </Paragraph>
        );
      });

      it('renders the children', function() {
        expect(wrapper.contains(<i>text</i>)).to.be.true;
      });
    })
  });
}