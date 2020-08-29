import React from 'react';
import PropTypes from 'prop-types';

import {
  Menu,
  MenuList,
  MenuButton,
} from '@reach/menu-button';

import './movie-card.scss';
import getRandomString from '../../Utils';
import movieImg from '../../images/pulp-fiction.png';
import Heading from '../Base/Heading';
import IconComponent from '../Base/IconComponent';
import EditMovieComponent from '../EditMovieComponent';
import RemoveMovieComponent from '../RemoveMovieComponent';

const drawGenres = (genres) => genres.map((genre, i) => (
  <span className="movie-card__genre" key={getRandomString()}>
    {genre}
    {i === genres.length - 1 ? '' : ', '}
  </span>
));

const MovieCard = ({
  name, year, genres,
}) => (
  <article className="movie-card">
    <Menu>
      <MenuButton className="button button--text movie-card__menu">
        <IconComponent xlinkHref="#icons-sprite_more" color="light" />
      </MenuButton>
      <MenuList portal={false}>
        <EditMovieComponent />
        <RemoveMovieComponent />
      </MenuList>
    </Menu>

    <div className="row">
      <div className="col-xs-12">
        <img src={movieImg} alt="" className="movie-card__img" />
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

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MovieCard.defaultProps = {
};

export default MovieCard;
