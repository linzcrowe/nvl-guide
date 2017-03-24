import React, { PropTypes } from 'react';
import Header from '../components/header.jsx';
import Hr from '../components/hr.jsx';
import Paragraph from '../components/paragraph.jsx';
import AHref from '../components/aHref.jsx';

export default IndexIntroduction = (props) => {
  return (
    <Header>
      <div className="header-content-inner">
        <h1>
          Get more out of your day
        </h1>
        <Hr />
        <Paragraph primary>
          Work out what energises and drains you.<br/>
          Focus on the good, minimise the bad.<br/>
          End your days feeling happy and relaxed.
        </Paragraph>
        <AHref linkTo={props.whereToNext} primary large>
          Start Now
        </AHref>
      </div>
    </Header>
  );
}

IndexIntroduction.propTypes = {
  whereToNext: React.PropTypes.string.isRequired,
}