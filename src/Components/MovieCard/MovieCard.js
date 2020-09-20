/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuList, MenuButton } from '@reach/menu-button';

import Heading from '../Base/Heading';
import IconComponent from '../Base/IconComponent';
import EditMovieContainer from '../EditMovieComponent';
import RemoveMovieContainer from '../RemoveMovieComponent';
import getRandomString from '../../Utils';

import './movie-card.scss';

const drawGenres = (genres) =>
  genres.map((genre, i) => (
    <span className="movie-card__genre" key={getRandomString()}>
      {genre}
      {i === genres.length - 1 ? '' : ', '}
    </span>
  ));

const MovieCard = ({ openMovieDetails, editMovie, removeMovie, ...movie }) => {
  const { title, release_date, genres, poster_path } = movie;
  const year = new Date(Date.parse(release_date)).getFullYear();
  return (
    <article className="movie-card">
      <Menu>
        <MenuButton className="button button--text movie-card__menu">
          <IconComponent xlinkHref="#icons-sprite_more" color="light" />
        </MenuButton>
        <MenuList portal={false}>
          <EditMovieContainer movie={movie} />
          <RemoveMovieContainer movie={movie} />
        </MenuList>
      </Menu>

      <div className="row">
        <div className="col-xs-12">
          <a href="#" onClick={() => openMovieDetails(movie.id)}>
            <img src={poster_path} alt="" className="movie-card__img" />
          </a>
        </div>
        <div className="col-xs-12 padding-bottom-0 padding-top-0">
          <div className="row between-xs">
            <Heading headingLevel={3}>{title}</Heading>
            <div className="movie-card__year">{year}</div>
          </div>
        </div>
        <div className="col-xs-12 padding-top-0">{drawGenres(genres)}</div>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  openMovieDetails: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieCard;
