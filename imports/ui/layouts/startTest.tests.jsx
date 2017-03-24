import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import StartTest from './startTest.jsx';

if (Meteor.isClient) {
  describe('ui.layouts.StartTest', function() {
    describe('when a user is logged in', function() {
      let wrapper;
      let dummyFunc = (callback) => callback(undefined, true);
      let spy;

      beforeEach(function() {
        spy = sinon.spy();
        wrapper = shallow(
          <StartTest 
            isLoggedIn={true} 
            onStart={spy} />
        );
      });

      it('renders a Section', function() {
        expect(wrapper.find('Section').length).to.equal(1);
      });

      it('sets the Section attribute primary to true', function() {
        expect(wrapper.find('Section').at(0).prop('primary')).to.be.true;
      });

      it('renders an h2 for the heading text', function() {
        expect(wrapper.find('h2').length).to.equal(1);
      });

      it('renders an Hr', function() {
        expect(wrapper.find('Hr').length).to.equal(1);
      });

      it('sets the Hr attribute primary to be true', function() {
        expect(wrapper.find('Hr').at(0).prop('primary')).to.be.true;
      });

      it('renders a Paragraph', function() {
        expect(wrapper.find('Paragraph').length).to.equal(1);
      });

      it('sets the Paragraph attribute primary to true', function() {
        expect(wrapper.find('Paragraph').at(0).prop('primary')).to.be.true;
      });

      it('renders a Button', function() {
        expect(wrapper.find('Button').length).to.equal(1);
      });
    });

    describe('when a user is not logged in', function() {
      let wrapper;
      let dummyFunc = () => true;

      beforeEach(function() {
        wrapper = shallow(
          <StartTest 
            isLoggedIn={false} 
            onStart={dummyFunc} />
        );
      });

      it('renders a Section', function() {
        expect(wrapper.find('Section').length).to.equal(1);
      });

      it('sets the Section attribute primary to true', function() {
        expect(wrapper.find('Section').at(0).prop('primary')).to.be.true;
      });

      it('renders a Paragraph', function() {
        expect(wrapper.find('Paragraph').length).to.equal(1);
      });

      it('sets the Paragraph attribute primary to true', function() {
        expect(wrapper.find('Paragraph').at(0).prop('primary')).to.be.true;
      });
    });
  });
}