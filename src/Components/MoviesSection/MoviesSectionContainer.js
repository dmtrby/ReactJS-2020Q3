import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect} from 'react-redux';
import MoviesSection from './MoviesSection';
import { fetchMovies } from '../../redux/actions';

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

MoviesSectionContainer.getInitialProps = async ({ query, req }) => {
  await fetchMovies('Horror', 'title', 'd');
  return {};
}

MoviesSectionContainer.propTypes = {
  fetchMoviesFromServer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSectionContainer);
