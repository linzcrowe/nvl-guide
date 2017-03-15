import React, { PropTypes } from 'react';
import { idToDetails } from '../cardIdToDetails.js';
import Card from './card.jsx';

export default class RankOneIntoFour extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  rankingRow(rank, title, onClick) {
    let rankJSX;
    switch (rank) {
      case 1:
        rankJSX = <span>1<sup>st</sup></span>;
        break;
      case 2:
        rankJSX = <span>2<sup>nd</sup></span>;
        break;
      case 3:
        rankJSX = <span>3<sup>rd</sup></span>;
        break;
      case 4:
        rankJSX = <span>4<sup>th</sup></span>;
        break;
      default:
        rankJSX = <span>Unknown rank</span>;
    }

    return (
      <div className="rank-row">
        <div className="flex-column flex-column-ranking">
          {rankJSX}
        </div>
        <div className="flex-column flex-column-ranking">
          <Card title={title} />
        </div>
        <div className="flex-column flex-column-ranking">
          <button
            className="btn btn-primary btn-sm" 
            onClick={() => onClick()}>
            <i className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
            &nbsp;here
          </button>
        </div>
      </div>
    );
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
      <div className="container-fluid">
        <div className="row">
          <div className="section-heading col-lg-8 col-lg-offset-2 text-center">
            <Card title={toRank.title} />
            <br />
            <div className="flex-row">
              <p className="text-muted">
                Where does this rank against the current top four?
              </p>
            </div>

            <div>
              {this.rankingRow(1, first.title, () => this.props.onRankFirst(callback))}
              {this.rankingRow(2, second.title, () => this.props.onRankSecond(callback))}
              {this.rankingRow(3, third.title, () => this.props.onRankThird(callback))}
              {this.rankingRow(4, fourth.title, () => this.props.onRankFourth(callback))}
              <div className="flex-row">
                <button
                  className="btn btn-primary btn-sm" 
                  onClick={() => this.props.onNotInTopFour(callback)}>
                  Outside the top 4
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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