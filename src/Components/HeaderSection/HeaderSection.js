import React from 'react';
import PropTypes from 'prop-types';

import './header-section.scss';
import bgImage from '../../images/header_background.jpg';

const HeaderSection = ({ children }) => (
  <header className="header">
    <div className="header__background">
      <img className="header__background-image" src={bgImage} alt="" />
      <div className="header__background-gradient" />
    </div>
    <div className="header__content">{children}</div>
  </header>
);

HeaderSection.propTypes = {};

HeaderSection.defaultProps = {};

export default HeaderSection;
