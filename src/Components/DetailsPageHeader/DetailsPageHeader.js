import React from 'react';
import PropTypes from 'prop-types';

import Logotype from '../Logotype';
import Button from '../Base/Button';
import Heading from '../Base/Heading';
import IconComponent from '../Base/IconComponent';
import movieImg from '../../images/pulp-fiction.png';
import './details-page-header.scss';
import getRandomString from '../../Utils';

const drawGenres = (genres) => genres.map((genre, i) => (
  <span className="details-page__genre" key={getRandomString()}>
    {genre}
    {i === genres.length - 1 ? '' : ', '}
  </span>
));

const DetailsPageHeader = ({
  name, year, genres, rating, description, duration, setMainPage,
}) => (
  <>
    <div className="container margin-bottom-2">
      <div className="header__logo-section row between-xs middle-xs padding-top-2">
        <span className="header__logo">
          <Logotype />
        </span>
        <Button variant="text" onClick={setMainPage} classList="modal__close-button">
          <IconComponent xlinkHref="#icons-sprite_search" color="primary" />
        </Button>
      </div>
    </div>
    <div className="container padding-bottom-2">
      <div className="row padding-left-2 padding-right-2">
        <div className="col-xs-12 col-md-6 col-lg-5 col-xl-4 details-page__img-container">
          <img src={movieImg} alt="" className="details-page__img" />
        </div>
        <div className="col-xs-12 col-md-6 col-lg-7 col-xl-8 margin-top-1">
          <div className="row">
            <div className="col">
              <div className="row">
                <Heading headingLevel={1} classList="details-page__header">{name}</Heading>
                <div className="details-page__rating margin-left-3">
                  <span className="details-page__rating-value">{rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {drawGenres(genres)}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <span className="details-page__year margin-right-4">
                  {year}
                </span>
                <span className="details-page__time">
                  {duration}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 details-page__description">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

);

DetailsPageHeader.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  setMainPage: PropTypes.func.isRequired,
};

export default DetailsPageHeader;
