import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';

import Button from '../Base/Button';

import './genre-selector.scss';

const GenreSelector = ({ genresData, setFilterFunction }) => {
  const [filterValue, setFilterValue] = useState('All');
  const history = useHistory();

  useEffect(() => {
    const values = queryString.parse(history.location.search);
    if (values.filter) {
      setFilterValue(values.filter);
      setFilterFunction(values.filter);
    }
  }, []);

  const makeUrl = (newFilter) => {
    const queryValues = queryString.parse(history.location.search);
    queryValues.filter = newFilter;
    const url = queryString.stringify(queryValues, {
      skipEmptyString: true,
    });
    return `?${url}`;
  };

  const changeFilterHandler = (newFilter) => {
    setFilterValue(newFilter);
    setFilterFunction(newFilter);
    const { pathname } = history.location;
    const url = makeUrl(newFilter);
    history.push(pathname + url);
  }

  return (
    <nav className="genre-selector">
      <ul className="genre-selector__list">
        {genresData.map((genre) => (
          <li className="genre-selector__item margin-left-1 margin-right-1" key={genre}>
            <Button
              onClick={() => changeFilterHandler(genre)}
              classList={`genre-selector__button ${genre === filterValue ? 'genre-selector__button--active' : ''}`}
              variant="text"
              text={genre}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
} 

GenreSelector.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  genresData: PropTypes.array.isRequired,
};

export default GenreSelector;
