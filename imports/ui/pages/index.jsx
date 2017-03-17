import React from 'react';
import LoginWrapper from '../layouts/loginWrapper.jsx';
import Header from '../components/header.jsx';
import Section from '../components/section.jsx';

export default Index = () => {
  const whereToNext = Meteor.userId() ? "/results" : "/signup";

  return (
    <div>
      <Header>
          <div className="header-content-inner">
            <h1 id="homeHeading">
              Get more out of your day
            </h1>
            <hr className="short primary" />
            <p>
              Work out what energises and drains you.<br/>
              Focus on the good, minimise the bad.<br/>
              End your days feeling happy and relaxed.
            </p>
            <a href={whereToNext} className="btn btn-primary btn-xl page-scroll">
              Start Now
            </a>
          </div>
      </Header>
      <Section primary>
        <h2>Increase Energy Sources</h2>
        <hr className="short light" />
        <p className="text-faded">
          We're born with things that are natural to do and be.<br />
          Find out what yours are and how to focus on them.<br />
          Learn how to end your day feeling more energetic.
        </p>
        <a href={whereToNext} className="page-scroll btn btn-default btn-xl sr-button">
          Find Out More
        </a>
      </Section>
      <Section>
        <h2>Reduce Energy Drains</h2>
        <hr className="short primary" />
        <p className="text-muted">
          We learn things in life that help us thrive.<br />
          Some of them drain our energy, despite their usefulness.<br />
          Learn what they are, and how to minimise them.
        </p>
        <a href={whereToNext} className="btn btn-primary btn-xl page-scroll">
          Learn More
        </a>
      </Section>
      <div className="footer-block" />
    </div>
  );
}