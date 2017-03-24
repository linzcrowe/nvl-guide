import { Meteor } from 'meteor/meteor';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SectionTitle from './sectionTitle.jsx';

if (Meteor.isClient) {
  describe('ui.components.SectionTitle', function() {
    describe('when passed a prefix', function() {
      let wrapper;
      const prefix = 'pref';
      const title = 'test';

      beforeEach(function() {
        wrapper = shallow(
          <SectionTitle prefix={prefix}>
            {title}
          </SectionTitle>
        );
      });

      it('renders an h2', function() {
        expect(wrapper.find('h2').length).to.equal(1);
      });

      it('renders the prefix', function() {
        expect(wrapper.text().indexOf(prefix)).to.not.equal(-1);
      });

      it('renders a br', function() {
        expect(wrapper.find('br').length).to.equal(1);
      });

      it('renders the title', function() {
        expect(wrapper.text().indexOf(title)).to.not.equal(-1);
      })

    });

    describe('when not passed a prefix', function() {
      let wrapper;
      const title = 'test';

      beforeEach(function() {
        wrapper = shallow(
          <SectionTitle>
            {title}
          </SectionTitle>
        );
      });

      it('renders an h2', function() {
        expect(wrapper.find('h2').length).to.equal(1);
      });

      it('renders the title', function() {
        expect(wrapper.text().indexOf(title)).to.not.equal(-1);
      });
    });
  });
}