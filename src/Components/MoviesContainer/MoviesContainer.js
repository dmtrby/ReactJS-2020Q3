import React from 'react';
import PropTypes from 'prop-types';

import './movies-container.scss';
import MovieCard from '../MovieCard';

const MoviesContainer = ({ movies }) => (
  <div className="container">
    <div className="row flex-column">
      <div className="col-xs-12">
        <span>
          <strong>{movies.length}</strong>
          {' '}
          movies found
        </span>
      </div>
      <div className="col-xs-12 col-no-gutter margin-bottom-6">
        <div className="row">
          {movies.map((film) => <div className="col-xs-12 col-md-6 col-lg-6 col-xl-4 col-no-gutter-lr" key={film.id}><MovieCard {...film} /></div>)}
        </div>
      </div>
    </div>
  </div>
);

MoviesContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesContainer;
