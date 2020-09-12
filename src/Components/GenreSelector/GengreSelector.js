import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Base/Button';

import './genre-selector.scss';

const genres = ['All', 'Drama', 'Comedy', 'Biography', 'Crime'];

const GenreSelector = ({ filterBy, changeFilter }) => (
  <nav className="genre-selector">
    <ul className="genre-selector__list">
      {genres.map((genre) => (
        <li key={genre}>
          <Button
            onClick={() => changeFilter(genre)}
            classList={`genre-selector__item ${genre === filterBy ? 'genre-selector__item--active' : ''}`}
            variant="text"
            text={genre}
          />
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
