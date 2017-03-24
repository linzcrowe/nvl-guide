import { Meteor } from 'meteor/meteor';
import React from 'react';
import Sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RankRow from './rankRow.jsx';

if (Meteor.isClient) {
  describe('ui.components.RankRow', function() {
    let wrapper;
    const dummyFunc = () => true;
    const dummyTitle = "title";

    beforeEach(function() {
      wrapper = shallow(<RankRow rank={1} qualityTitle={dummyTitle} onClick={dummyFunc} />);
    });

    it('renders a single SpacedRow', function() {
      expect(wrapper.find('SpacedRow').length).to.equal(1);
    })

    it('renders 3 RankColumns in the SpacedRow', function() {
      expect(wrapper.find('RankColumn').length).to.equal(3);
    });

    const ranks = [
      {
        number: 1,
        jsx: <span>1<sup>st</sup></span>,
      },
      {
        number: 2,
        jsx: <span>2<sup>nd</sup></span>,
      },
      {
        number: 3,
        jsx: <span>3<sup>rd</sup></span>,
      },
      {
        number: 4,
        jsx: <span>4<sup>th</sup></span>,
      },
      {
        number: 5,
        jsx: <span>Unknown</span>
      }
    ];

    for (let entry of ranks) {
      describe('when passed the rank ' + entry.number.toString(), function() {
        beforeEach(function() {
          wrapper = shallow(
            <RankRow rank={entry.number} qualityTitle={dummyTitle} onClick={dummyFunc} />
          );
        });

        it('renders the rank correctly in the first column', function() {
          expect(wrapper.find('RankColumn').at(0).contains(entry.jsx)).to.be.true;
        });
      });
    }

    it('renders a Quality in the second column', function() {
      expect(wrapper.find('RankColumn').at(1).find('Quality').length).to.equal(1);
    });

    it('passes a title to the Quality', function () {
      const quality = wrapper.find('Quality');
      expect(wrapper.find('Quality').prop('title')).to.equal(dummyTitle);
    });

    it('renders a Button in the third column', function() {
      expect(wrapper.find('RankColumn').at(2).find('Button').length).to.equal(1);
    });

    it('passes the Button the attribute primary', function() {
      expect(wrapper.find('Button').prop('primary')).to.be.true;
    });

    it('passed the Button the onClick function', function() {
      expect(wrapper.find('Button').prop('onClick')).to.equal(dummyFunc);
    });
  });
}