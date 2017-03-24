import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from './button.jsx';

if (Meteor.isClient) {
  describe('ui.components.Button', function() {
    const dummyFunc = () => true;

    describe('when passed the attribute primary', function() {
      describe('and passed the attribute large', function() {
        let wrapper;

        beforeEach(function() {
          wrapper = shallow(<Button primary large onClick={dummyFunc} />);
        });

        it('renders a button', function() {
          expect(wrapper.find('button').length).to.equal(1);
        });

        it('the button has the class btn', function() {
          expect(wrapper.find('button.btn').length).to.equal(1);
        });

        it('the button has the class btn-xl', function() {
          expect(wrapper.find('button.btn-xl').length).to.equal(1);
        });

        it('the button has the class btn-primary', function() {
          expect(wrapper.find('button.btn-primary').length).to.equal(1);
        });
      });

      describe('and not passed the attribute large', function() {
        let wrapper;

        beforeEach(function() {
          wrapper = shallow(<Button primary onClick={dummyFunc} />);
        });

        it('renders a button', function() {
          expect(wrapper.find('button').length).to.equal(1);
        });

        it('the button has the class btn', function() {
          expect(wrapper.find('button.btn').length).to.equal(1);
        });

        it('the button has the class btn-sm', function() {
          expect(wrapper.find('button.btn-sm').length).to.equal(1);
        });

        it('the button has the class btn-primary', function() {
          expect(wrapper.find('button.btn-primary').length).to.equal(1);
        });
      });
    });

    describe('when not passed the attribute primary', function() {
      describe('and passed the attribute large', function() {
        let wrapper;

        beforeEach(function() {
          wrapper = shallow(<Button large onClick={dummyFunc} />);
        });

        it('renders a button', function() {
          expect(wrapper.find('button').length).to.equal(1);
        });

        it('the button has the class btn', function() {
          expect(wrapper.find('button.btn').length).to.equal(1);
        });

        it('the button has the class btn-xl', function() {
          expect(wrapper.find('button.btn-xl').length).to.equal(1);
        });

        it('the button has the class btn-primary', function() {
          expect(wrapper.find('button.btn-default').length).to.equal(1);
        });
      });

      describe('and not passed the attribute large', function() {
        let wrapper;

        beforeEach(function() {
          wrapper = shallow(<Button onClick={dummyFunc} />);
        });

        it('renders a button', function() {
          expect(wrapper.find('button').length).to.equal(1);
        });

        it('the button has the class btn', function() {
          expect(wrapper.find('button.btn').length).to.equal(1);
        });

        it('the button has the class btn-xl', function() {
          expect(wrapper.find('button.btn-sm').length).to.equal(1);
        });

        it('the button has the class btn-primary', function() {
          expect(wrapper.find('button.btn-default').length).to.equal(1);
        });
      });
    });

    describe('when passed children', function() {
      let wrapper;

      beforeEach(function() {
        wrapper = shallow(
          <Button onClick={dummyFunc} >
            <i>text</i>
          </Button>);
      });

      it('renders the children', function() {
        expect(wrapper.contains(<i>text</i>)).to.be.true;
      });
    });

    describe('when passed an onClick function', function() {
      describe('and the button is clicked', function() {
        let wrapper;
        let spy;

        beforeEach(function() {
          spy = sinon.spy();
          wrapper = shallow(
            <Button onClick={spy} >
              <i>text</i>
            </Button>);
          wrapper.find('button').simulate('click');
        });

        it('calls the onClick function once', function() {
          expect(spy.calledOnce).to.be.true;
        });
      });
    });
  });
}