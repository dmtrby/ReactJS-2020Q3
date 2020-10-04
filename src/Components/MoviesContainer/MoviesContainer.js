import React from 'react';
import PropTypes from 'prop-types';

import MovieCardContainer from '../MovieCard';

import './movies-container.scss';

const MoviesContainer = ({ movies, ...otherProps }) => (
  <div className="container">
    <div className="row flex-column">
      <div className="col-xs-12">
        <span>
          <strong>{movies.length}</strong>
          movies found
        </span>
      </div>
      <div className="col-xs-12 col-no-gutter margin-bottom-6">
        <div className="row">
          {movies.map((film) => (
            <div className="col-xs-12 col-md-6 col-lg-6 col-xl-4 col-no-gutter-lr" key={film.id}>
              <MovieCardContainer {...film} {...otherProps} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

MoviesContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesContainer;
