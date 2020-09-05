import React from 'react';
import PropTypes from 'prop-types';

import './genre-selector.scss';
import Button from '../Base/Button';
import getRandomString from '../../Utils';

const genres = ['All', 'Drama', 'Comedy', 'Biography', 'Crime'];

const GenreSelector = ({ filterBy, changeFilter }) => (
  <nav className="genre-selector">
    <ul className="genre-selector__list">
      {genres.map((genre) => (
        <li key={getRandomString()}>
          <Button onClick={() => changeFilter(genre)} classList={`genre-selector__item ${genre === filterBy ? 'genre-selector__item--active' : ''}`} variant="text" text={genre} />
        </li>
      ))}
    </ul>
  </nav>
);

GenreSelector.propTypes = {
  filterBy: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default GenreSelector;
