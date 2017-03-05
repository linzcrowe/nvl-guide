import { Meteor } from 'meteor/meteor';
import React from 'react';
import Sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NewTest from './newTest.jsx';

if (Meteor.isClient) {
  describe('ui.components.NewTest', function() {
    describe('when the user is not logged in', function() {
      let wrapper;

      beforeEach(function() {
        wrapper = shallow(<NewTest isLoggedIn={false} onCreateButtonClick={() => true} />);
      });

      it('renders a paragraph saying the user needs to log in', function() {
        expect(wrapper.find('p').length).to.equal(2);
      });

      it('does not render the button to create a new result', function() {
        expect(wrapper.find('#btnCreateResult').length).to.equal(0);
      });
    });

    describe('when the user is logged in', function() {
      let wrapper;

      beforeEach(function() {
        wrapper = shallow(<NewTest isLoggedIn={true} onCreateButtonClick={() => true} />);
      });

      it('does not render a paragraph saying the user needs to log in', function() {
        expect(wrapper.find('p').length).to.equal(1);
      })

      it('renders the button to create a new result', function() {
        expect(wrapper.find('#btnCreateResult').length).to.equal(1);
      });
    });

    describe('when the button is clicked', function() {
      let spy;

      beforeEach(function() {
        spy = Sinon.spy();
        const wrapper = shallow(<NewTest isLoggedIn={true} onCreateButtonClick={spy} />);
        wrapper.find('#btnCreateResult').simulate('click');
      });

      it('the button calls the record creation prop', function() {
        expect(spy).to.have.property('callCount', 1);
      });
    });
  });
}