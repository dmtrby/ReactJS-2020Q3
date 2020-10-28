import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Logotype from '../Logotype';
import Heading from '../Base/Heading';
import IconComponent from '../Base/IconComponent';

import './details-page-header.scss';

const drawGenres = (genres) =>
  genres.map((genre, i) => (
    <span className="details-page__genre" key={genre}>
      {genre}
      {i === genres.length - 1 ? '' : ', '}
    </span>
  ));

const DetailsPageHeader = ({ title, release_date, poster_path, genres, vote_average, overview, runtime }) => {
  const year = new Date(Date.parse(release_date)).getFullYear();
  return (
    <>
      <div className="container margin-bottom-2">
        <div className="header__logo-section row between-xs middle-xs padding-top-2">
          <span className="header__logo">
            <Logotype />
          </span>
          <Link href="/" as="/" className="modal__close-button button button--text">
            <a>
              <IconComponent xlinkHref="#search" color="primary" />
            </a>
          </Link>
        </div>
      </div>
      <div className="container padding-bottom-2">
        <div className="row padding-left-2 padding-right-2">
          <div className="col-xs-12 col-md-6 col-lg-5 col-xl-4 details-page__img-container">
            <img src={poster_path} alt="" className="details-page__img" />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-7 col-xl-8 margin-top-1">
            <div className="row">
              <div className="col">
                <div className="row">
                  <Heading headingLevel={1} classList="details-page__header">
                    {title}
                  </Heading>
                  <div className="details-page__rating margin-left-3">
                    <span className="details-page__rating-value">{vote_average}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">{drawGenres(genres)}</div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <span className="details-page__year margin-right-4">{year}</span>
                  <span className="details-page__time">{runtime}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 details-page__description">{overview}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetailsPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default DetailsPageHeader;
