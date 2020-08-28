import React from 'react';

import './header-section.scss';
import bgImage from '../../images/header_background.jpg';
import MainPageHeader from '../MainPageHeader';

const Header = () => (
  <header className="header">
    <div className="header__background">
      <img className="header__background-image" src={bgImage} alt="" />
      <div className="header__background-gradient" />
    </div>
    <div className="header__content">
      <MainPageHeader />
    </div>

  </header>

);

export default Header;
