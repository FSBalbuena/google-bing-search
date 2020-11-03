import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = ({ title, link, snippet }) => {
  return (
    <article>
      <header>
        <h3>
          <a href={link}>{title}</a>
        </h3>
      </header>
      <p>{snippet}</p>
    </article>
  );
};

const ResultList = ({ results }) => {
  return (
    <section>
      {results.map((item, idx) => (
        <ResultItem {...item} key={idx} />
      ))}
    </section>
  );
};

ResultList.propTypes = {
  results: PropTypes.array,
};
ResultItem.propTypes = {
  title: PropTypes.array,
  link: PropTypes.string,
  snippet: PropTypes.string,
};
export default ResultList;
