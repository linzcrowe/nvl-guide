import React, { PropTypes } from 'react';

export default RankOneIntoFour = ({
  toRank, 
  onRankFirst, onRankSecond, onRankThird, onRankFourth,
  first, second, third, fourth,
  onNotInTopFour,
}) => {
  const callback = (err, suc) => {
    if (err) {
      alert(JSON.stringify(err));
    }
  }

  return (
    <div>
      <h3>To Rank</h3>
      <p>{toRank}</p>
      <h3>Top Four</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={() => onRankFirst(callback)}>
                <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
              </button>
            </td>
            <td>
              <button onClick={() => onRankSecond(callback)}>
                <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
              </button>
            </td>
            <td>
              <button onClick={() => onRankThird(callback)}>
                <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
              </button>
            </td>
            <td>
              <button onClick={() => onRankFourth(callback)}>
                <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              {first}
            </td>
            <td>
              {second}
            </td>
            <td>
              {third}
            </td>
            <td>
              {fourth}
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => onNotInTopFour(callback)}>
        Not in the top four
      </button>
    </div>);
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