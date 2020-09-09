import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import GenreSelector from '../GenreSelector';
import MoviesContainer from '../MoviesContainer';
import SortSection from '../SortSection';

import './main-section.scss';

const MainSection = ({ movies, ...otherProps }) => {
  const [filterStatus, setFilter] = useState({
    sortBy: 'name',
    filterBy: 'All',
  });

  const changeFilter = useCallback((filter) => {
    setFilter({
      ...filterStatus,
      filterBy: filter,
    });
  });

  const onSortChange = useCallback((sortValue) => {
    setFilter({
      ...filterStatus,
      sortBy: sortValue,
    });
  });

  const sortMovies = useMemo(
    () => {
      const { sortBy, filterBy } = filterStatus;
      const filteredMovies = movies.filter((v) => v.genres.indexOf(filterBy) !== -1 || filterBy === 'All');
      if (sortBy === 'name') {
        return filteredMovies.sort((a, b) => a.name.localeCompare(b.name));
      }
      return filteredMovies.sort((a, b) => a[sortBy] - b[sortBy]);
    },
    [filterStatus, movies],
  );

  return (
    <main className="main">
      <div className="container">
        <div className="row center-xs between-xl">
          <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5">
            <GenreSelector filterBy={filterStatus.filterBy} changeFilter={changeFilter} />
          </div>
          <div className="col-xs-12 col-md-12 col-lg-6 col-xl-5">
            <SortSection sortBy={filterStatus.sortBy} onSortChange={onSortChange} />
          </div>
        </div>
      </div>
      <MoviesContainer movies={sortMovies} {...otherProps} />
    </main>
  );
};

MainSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movies: PropTypes.array.isRequired,
};

export default MainSection;
