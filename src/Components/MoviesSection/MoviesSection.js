/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import MoviesContainer from '../MoviesContainer';
import DisplayPageStatus from '../DisplayPageStatus';

import './movies-section.scss';

const MoviesSection = ({ movies, isLoading, error }) => {
  return (
    <>
      {movies.length !== 0 && <MoviesContainer movies={movies} />}
      {isLoading && <DisplayPageStatus>Loading...</DisplayPageStatus>}
      {error && <DisplayPageStatus>Error</DisplayPageStatus>}
      {(movies.length === 0 && !isLoading) && <DisplayPageStatus>No movies Found</DisplayPageStatus>}
    </>
  );
};

MoviesSection.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

export default MoviesSection;
