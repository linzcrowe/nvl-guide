import React, { PropTypes } from 'react';
import { idToDetails } from '../cardIdToDetails.js';
import Quality from './quality.jsx';
import Button from './button.jsx';
import RankRow from './rankRow.jsx';
import RankColumn from './rankColumn.jsx';
import Section from './section.jsx';
import CentredRow from './centredRow.jsx';

export default class RankOneIntoFour extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const callback = (err, suc) => {
      if (err) {
        alert(JSON.stringify(err));
      }
    }

    toRank = idToDetails(this.props.toRank);
    first = idToDetails(this.props.first);
    second = idToDetails(this.props.second);
    third = idToDetails(this.props.third);
    fourth = idToDetails(this.props.fourth);

    return (
      <Section>
        <Quality title={toRank.title} />
        <br />
        <CentredRow>
          <Paragraph>
            Where does this rank against the current top four?
          </Paragraph>
        </CentredRow>

        <div>
          <RankRow 
            rank={1} 
            qualityTitle={first.title} 
            onClick={() => this.props.onRankFirst(callback)} />
          <RankRow
            rank={2} 
            qualityTitle={second.title} 
            onClick={() => this.props.onRankSecond(callback)} />
          <RankRow
            rank={3}
            qualityTitle={third.title}
            onClick={() => this.props.onRankThird(callback)} />
          <RankRow
            rank={4}
            qualityTitle={fourth.title}
            onClick={() => this.props.onRankFourth(callback)} />
          <CentredRow>
            <Button primary onClick={() => this.props.onNotInTopFour(callback)}>
              Outside the top 4
            </Button>
          </CentredRow>
        </div>
      </Section>
    );
  }
}

RankOneIntoFour.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
  toRank: PropTypes.string.isRequired,
  onRankFirst: PropTypes.func.isRequired,
  onRankSecond: PropTypes.func.isRequired,
  onRankThird: PropTypes.func.isRequired,
  onRankFourth: PropTypes.func.isRequired,
  onNotInTopFour: PropTypes.func.isRequired,
}