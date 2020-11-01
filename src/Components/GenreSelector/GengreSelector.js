import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Button from '../Base/Button';

import './genre-selector.scss';

const GenreSelector = ({ genresData, setFilterFunction }) => {
  const [filterValue, setFilterValue] = useState('All');
  const router = useRouter();
  const {
    query: { filter },
  } = router;

  useEffect(() => {
    if (filter) {
      setFilterValue(filter);
      setFilterFunction(filter);
    }
  }, []);

  const changeFilterHandler = (newFilter) => {
      delete router.query.id;
      setFilterValue(newFilter);
      setFilterFunction(newFilter);
      router.push({
        pathname: '/movies/search',
        query: { ...router.query, filter: newFilter },
      });
  };

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
};

GenreSelector.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  genresData: PropTypes.array.isRequired,
};

export default GenreSelector;
