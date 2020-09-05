import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './main-section.scss';

import GenreSelector from '../GenreSelector';
import MoviesContainer from '../MoviesContainer';
import SortSection from '../SortSection';

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

  const sortArray = (array, sortValue) => {
    if (sortValue === 'name') {
      return array.sort((a, b) => a.name.localeCompare(b.name));
    }
    return array.sort((a, b) => a[sortValue] - b[sortValue]);
  };

  const filteredMovies = movies.filter((v) => v.genres.indexOf(filterStatus.filterBy) !== -1 || filterStatus.filterBy === 'All');
  const sortMovies = sortArray(filteredMovies, filterStatus.sortBy);

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
