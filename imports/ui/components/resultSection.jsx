import React, { PropTypes } from 'react';
import Card from './card.jsx';

export default ResultSection = ({
  styles,
  titlePrefix,
  title,
  brief,
  cards,
  explanation,
}) => {
  const titleJSX = titlePrefix ?
    <span>
      {titlePrefix}
      <br/>
      {title}
    </span>
    :
    <span>
      {title}
    </span>;

  return (
    <section className={styles.section} key={titlePrefix? titlePrefix+title : title}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <div className="section-heading">
              <h2>
                {titleJSX}
              </h2>
              <hr className={styles.hr} />
              <p className={styles.p}>
                {brief} {/*Your qualities in this group */}
              </p>
              <div className="flex-row flex-row-wrap">
              {cards.map((card) => <Card title={card.title} key={card.card}/>)}
              </div>
              {explanation.map((line, index) => <p className={styles.p} key={index}>{line}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ResultSection.propTypes = {
  styles: React.PropTypes.object.isRequired,
  titlePrefix: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  brief: React.PropTypes.string.isRequired,
  cards: React.PropTypes.array.isRequired,
  explanation: React.PropTypes.array.isRequired
}