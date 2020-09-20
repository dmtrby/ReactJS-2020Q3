import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import WebApplication from './WebApplication';
import { fetchMovies } from '../../actions';

const WebApplicationContainer = ({ fetchMoviesFromServer, ...state }) => {
  const { movies, needToUpdate } = state;

  useEffect(() => {
    fetchMoviesFromServer();
  }, []);

  useEffect(() => {
    fetchMoviesFromServer();
  }, [needToUpdate]);

  const renderGenres = useMemo(() => {
    if (movies.length) {
      const genresArr = movies.reduce((arr, { genres }) => arr.concat(genres), []);
      genresArr.unshift('All');
      return [...new Set(genresArr)];
    }
    return [];
  }, [movies]);

  return <WebApplication {...state} renderGenres={renderGenres} />;
};

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesFromServer: () => dispatch(fetchMovies()),
});

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
  needToUpdate: state.movies.needToUpdate,
});

WebApplicationContainer.propTypes = {
  fetchMoviesFromServer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WebApplicationContainer);
