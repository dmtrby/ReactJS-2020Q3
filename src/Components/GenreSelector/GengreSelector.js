import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Base/Button';

import './genre-selector.scss';

const GenreSelector = ({ filter, changeFilterHandler, genresData }) => (
  <nav className="genre-selector">
    <ul className="genre-selector__list">
      {genresData.map((genre) => (
        <li className="genre-selector__item margin-left-1 margin-right-1" key={genre}>
          <Button
            onClick={() => changeFilterHandler(genre)}
            classList={`genre-selector__button ${genre === filter ? 'genre-selector__button--active' : ''}`}
            variant="text"
            text={genre}
          />
        </li>
      ))}
    </ul>
  </nav>
);

GenreSelector.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterHandler: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  genresData: PropTypes.array.isRequired,
};

export default GenreSelector;
