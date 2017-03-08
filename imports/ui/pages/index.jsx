import React from 'react';
import LoginWrapper from '../layouts/loginWrapper.jsx';

export default Index = () => (
  <header>
    <div className="header-content">
      <div className="header-content-inner">
        <h1 id="homeHeading">
          Get more out of your day
        </h1>
        <hr />
        <p>
          Work out what energises and drains you.<br/>
          Focus on the good, minimise the bad.<br/>
          End your days feeling happy and relaxed.
        </p>
        <a href="/signup" className="btn btn-primary btn-xl page-scroll">
          Start the test
        </a>
      </div>
    </div>
    <section>
      <LoginWrapper />
    </section>
  </header>
);