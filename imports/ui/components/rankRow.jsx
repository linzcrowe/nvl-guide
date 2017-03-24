import React, { PropTypes } from 'react';
import RankColumn from './rankColumn.jsx';
import Quality from './quality.jsx';
import Button from './button.jsx';
import SpacedRow from './spacedRow.jsx';

export default RankRow = (props) => {
  let rankJSX;
  switch (props.rank) {
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
      rankJSX = <span>Unknown</span>;
  }

  return (
    <SpacedRow>
      <RankColumn>
        {rankJSX}
      </RankColumn>
      <RankColumn>
        <Quality title={props.qualityTitle} />
      </RankColumn>
      <RankColumn>
        <Button primary onClick={props.onClick}>
          <i className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
          &nbsp;here
        </Button>
      </RankColumn>
    </SpacedRow>
  );
}

RankRow.propTypes = {
  rank: React.PropTypes.number.isRequired,
  qualityTitle: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
}