/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  MenuList,
  MenuButton,
} from '@reach/menu-button';

import Heading from '../Base/Heading';
import IconComponent from '../Base/IconComponent';
import EditMovieComponent from '../EditMovieComponent';
import RemoveMovieComponent from '../RemoveMovieComponent';
import getRandomString from '../../Utils';

import movieImg from '../../images/pulp-fiction.png';
import './movie-card.scss';

const drawGenres = (genres) => genres.map((genre, i) => (
  <span className="movie-card__genre" key={getRandomString()}>
    {genre}
    {i === genres.length - 1 ? '' : ', '}
  </span>
));

const MovieCard = ({
  setDetailsPage, editMovie, removeMovie, ...movie
}) => {
  const {
    name, year, genres,
  } = movie;
  return (
    <article className="movie-card">
      <Menu>
        <MenuButton className="button button--text movie-card__menu">
          <IconComponent xlinkHref="#icons-sprite_more" color="light" />
        </MenuButton>
        <MenuList portal={false}>
          <EditMovieComponent movie={movie} editMovie={editMovie} />
          <RemoveMovieComponent movie={movie} onSubmit={removeMovie} />
        </MenuList>
      </Menu>

      <div className="row">
        <div className="col-xs-12">
          <a href="#" onClick={() => setDetailsPage(movie)}>
            <img src={movieImg} alt="" className="movie-card__img" />
          </a>
        </div>
        <div className="col-xs-12 padding-bottom-0 padding-top-0">
          <div className="row between-xs">
            <Heading headingLevel={3}>{name}</Heading>
            <div className="movie-card__year">
              {year}
            </div>
          </div>
        </div>
        <div className="col-xs-12 padding-top-0">
          {drawGenres(genres)}
        </div>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  setDetailsPage: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MovieCard.defaultProps = {
};

export default MovieCard;
