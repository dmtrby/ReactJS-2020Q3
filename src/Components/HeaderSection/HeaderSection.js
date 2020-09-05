import React from 'react';
import PropTypes from 'prop-types';

import './header-section.scss';
import bgImage from '../../images/header_background.jpg';
import MainPageHeader from '../MainPageHeader';
import DetailsPageHeader from '../DetailsPageHeader';

const Header = ({ isDetailsPage, detailsMovieData, setMainPage, addMovie }) => (
  <header className="header">
    <div className="header__background">
      <img className="header__background-image" src={bgImage} alt="" />
      <div className="header__background-gradient" />
    </div>
    <div className="header__content">
      {isDetailsPage ? (
        <DetailsPageHeader
          {...detailsMovieData}
          setMainPage={setMainPage}
        />
      ) : <MainPageHeader addMovie={addMovie} />}
    </div>
  </header>
);

Header.propTypes = {
  isDetailsPage: PropTypes.bool.isRequired,
};

export default Header;
