import React from 'react';

export default Results = (props) => {
  const heading = <h1>Props: {JSON.stringify(props)}</h1>;
  let body;

  switch (props.stage) {
    case 0:
      body = <h2>First stage: Sort into piles</h2>;
      break;
    case 1:
      body = <h2>Second stage: Find top 4 cards that are like you and give you the most energy</h2>;
      break;
    case 2:
      body = <h2>Third stage: Find top 4 cards that are like you and drain your energy the most</h2>;
      break;
    case 3:
      body = <h2>Fourth stage: Presentation of type, and link to further information</h2>;
      break;
    default:
      body = <h2>Results body is broken</h2>
  }

  return (heading + body);
}