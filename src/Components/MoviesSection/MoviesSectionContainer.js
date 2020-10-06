import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';

import { connect, compose } from 'react-redux';
import MoviesSection from './MoviesSection';
import { fetchMovies } from '../../actions';

const MoviesSectionContainer = ({ fetchMoviesFromServer, filter, sortBy, search, ...state }) => {
  useEffect(() => {
    fetchMoviesFromServer(filter, sortBy, search);
  }, [filter, sortBy, search]);

  return <MoviesSection {...state} />;
};

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesFromServer: (filter, sortBy, search) => dispatch(fetchMovies(filter, sortBy, search)),
});

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  sortBy: state.movies.sortBy,
  search: state.movies.search,
  filter: state.movies.filter,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
});

MoviesSectionContainer.propTypes = {
  fetchMoviesFromServer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSectionContainer);
