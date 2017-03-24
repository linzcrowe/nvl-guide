import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AHref from './aHref.jsx';

if (Meteor.isClient) {
  describe('ui.components.AHref', function() {
    let wrapper;
    const url = '/test';

    beforeEach(function() {
      wrapper = shallow(<AHref linkTo={url}/>)
    });

    it('renders 1 of the element a', function() {
      expect(wrapper.find('a').length).to.equal(1);
    });

    it('passes the linkTo to the a as an href', function() {
      expect(wrapper.find('a').prop('href')).to.equal(url);
    });

    describe('when not passed the attribute primary', function() {
      describe('and not passed the attribute large', function() {
        let wrapper;
        const url = '/test';

        beforeEach(function() {
          wrapper = shallow(<AHref linkTo={url}/>)
        });

        it('sets the class btn-sm on the a', function() {
          const element = wrapper.find('a');
          expect(element.hasClass('btn-sm')).to.be.true;
        });

        it('sets the class btn-default on the a', function() {
          const element = wrapper.find('a');
          expect(element.hasClass('btn-default')).to.be.true;
        });
      });
    });

    describe('when passed the attribute primary', function() {
      describe('and passed the attribute large', function() {
        let wrapper;
        const url = '/test';

        beforeEach(function() {
          wrapper = shallow(<AHref linkTo={url} primary large/>)
        });
        
        it('sets the class btn-xl on the a', function() {
          const element = wrapper.find('a');
          expect(element.hasClass('btn-xl')).to.be.true;
        });

        it('sets the class btn-primary on the a', function() {
          const element = wrapper.find('a');
          expect(element.hasClass('btn-primary')).to.be.true;
        });
      });
    });
  });
}