import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { fetchMovie } from '../../actions';
import DetailsPageHeader from './DetailsPageHeader';
import DisplayPageStatus from '../DisplayPageStatus';

const DetailsPageHeaderContainer = ({ fetchMovieFromServer, detailedMovieLoading, detailedMovie, id }) => {
  useEffect(() => {
    fetchMovieFromServer(id);
  }, [id]);

  if ((detailedMovieLoading && !detailedMovie) || !detailedMovie ) {
    return <DisplayPageStatus>Loading...</DisplayPageStatus>;
  } else if (detailedMovie === 404) {
    return <Redirect to="/404" />;
  } else {
    return <DetailsPageHeader {...detailedMovie} />
  }
};

const mapStateToProps = (state) => {
  return {
    detailedMovie: state.movies.detailedMovie,
    detailedMovieLoading: state.movies.detailedMovieLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovieFromServer: (id) => dispatch(fetchMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPageHeaderContainer);
