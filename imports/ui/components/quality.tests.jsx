import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Quality from './quality.jsx';

if (Meteor.isClient) {
  describe('ui.components.Quality', function() {
    let wrapper;
    const title = "test title";
    const description = "test description";
    const slim = false;

    beforeEach(function() {
      wrapper = shallow(<Quality title={title} description={description} />);
    });

    it('renders a single span', function() {
      expect(wrapper.find('span').length).to.equal(1);
    });

    it('renders its title in the first div', function() {
      expect(wrapper.find('div').at(0).text()).to.equal(title);
    });

    it('passes the first div the class card-title', function() {
      expect(wrapper.find('div').at(0).hasClass('card-title')).to.be.true;
    });

    describe('when provided a description', function() {
      beforeEach(function() {
        wrapper = shallow(<Quality title={title} description={description} />);
      });

      it ('renders two divs', function() {
        expect(wrapper.find('div').length).to.equal(2);
      });

      it('the span has the class card-with-description', function() {
        const span = wrapper.find('span').at(0);
        expect(span.hasClass('card-with-description')).to.be.true;
      });

      it('renders the description in the second div', function() {
        expect(wrapper.find('div').at(1).text()).to.equal(description);
      });

      it('gives the second div the class card-description', function() {
        const secondDiv = wrapper.find('div').at(1);
        expect(secondDiv.hasClass('card-description')).to.be.true;
      });
    });

    describe('when not provided a description', function() {
      beforeEach(function() {
        wrapper = shallow(<Quality title={title} />);
      });

      it('renders a single div', function() {
        expect(wrapper.find('div').length).to.equal(1);
      });
    })

    describe('when passed the parameter slim', function() {
      beforeEach(function() {
        wrapper = shallow(<Quality title={title} slim />);
      });

      it('passes the class card-slim to the span', function() {
        const span = wrapper.find('span');
        expect(span.hasClass('card-slim')).to.be.true;
      });
    });
  });
}