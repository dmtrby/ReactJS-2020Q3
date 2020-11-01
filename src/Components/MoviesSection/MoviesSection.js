/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

import MoviesContainer from '../MoviesContainer';
import DisplayPageStatus from '../DisplayPageStatus';

import './movies-section.scss';

const MoviesSection = () => {
  const { movies, error, isLoading } = useSelector((state) => state);
  return (
    <>
      {movies.length !== 0 && <MoviesContainer movies={movies} />}
      {isLoading && <DisplayPageStatus>Loading...</DisplayPageStatus>}
      {error && <DisplayPageStatus>Error</DisplayPageStatus>}
      {movies.length === 0 && !isLoading && <DisplayPageStatus>No movies Found. Use search tool</DisplayPageStatus>}
    </>
  );
};

export default MoviesSection;
