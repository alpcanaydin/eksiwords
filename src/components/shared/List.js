import React from 'react';
import PropTypes from 'prop-types';

import './List.css';

const List = ({ data }) => (
  <ul className="List">
    {data.map((item, index) => (
      <li className="List__item">
        <strong>{index + 1}.</strong>
        {' '}
        {item.word}
        {' '}
        <span className="u-text-primary">({item.count} defa)</span>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
