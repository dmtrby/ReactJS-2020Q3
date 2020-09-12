import React from 'react';
import PropTypes from 'prop-types';

import MainPageHeader from '../MainPageHeader';
import DetailsPageHeader from '../DetailsPageHeader';

import './header-section.scss';
import bgImage from '../../images/header_background.jpg';

const Header = ({ isDetailsPage, detailsMovieData, setMainPage, addMovie, searchMovies }) => (
  <header className="header">
    <div className="header__background">
      <img className="header__background-image" src={bgImage} alt="" />
      <div className="header__background-gradient" />
    </div>
    <div className="header__content">
      {isDetailsPage ? (
        <DetailsPageHeader {...detailsMovieData} setMainPage={setMainPage} />
      ) : (
        <MainPageHeader addMovie={addMovie} searchMovies={searchMovies} />
      )}
    </div>
  </header>
);

Header.propTypes = {
  isDetailsPage: PropTypes.bool.isRequired,
  setMainPage: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  detailsMovieData: PropTypes.object,
};

Header.defaultProps = {
  detailsMovieData: null,
};

export default Header;
