/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import GenreSelectorContainer from '../GenreSelector';
import MoviesContainer from '../MoviesContainer';
import SortSectionContainer from '../SortSection';

import './main-section.scss';

const MainSection = ({ movies, genresData, ...otherProps }) => (
  <main className="main">
    <div className="container">
      <div className="row center-xs between-xl">
        <div className="col-xs-12 col-md-10 col-lg-7 col-xl-8">
          <GenreSelectorContainer genresData={genresData} />
        </div>
        <div className="col-xs-12 col-md-12 col-lg-5 col-xl-4">
          <SortSectionContainer />
        </div>
      </div>
    </div>
    <MoviesContainer movies={movies} {...otherProps} />
  </main>
);

MainSection.propTypes = {
  movies: PropTypes.array.isRequired,
  genresData: PropTypes.array.isRequired,
};

export default MainSection;
