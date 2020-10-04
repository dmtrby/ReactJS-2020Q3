/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import HeaderSectionContainer from '../HeaderSection';
import MainSection from '../MainSection';

const WebApplication = ({ error, isLoading, movies, renderGenres }) => (
  <>
    <HeaderSectionContainer />
    {movies.length !== 0 && <MainSection movies={movies} genresData={renderGenres} />}
    {isLoading && (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">loading</div>
        </div>
      </div>
    )}
    {error && (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">error</div>
        </div>
      </div>
    )}
  </>
);

WebApplication.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderGenres: PropTypes.array.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

export default WebApplication;
