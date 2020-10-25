/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import Logotype from '../Logotype';
import FooterSection from '../FooterSection';
import Heading from '../Base/Heading';
import './page404.scss';

const Page404 = () => (
  <div className="error-page">
    <div className="error-page__header container margin-bottom-2">
      <div className="header__logo-section row start-xs middle-xs padding-top-2">
        <span className="header__logo">
          <Logotype />
        </span>
      </div>
    </div>
    <div className="container error-page__section">
      <div className="flex-column center">
        <div className="col-xs-12 col-lg-10 col-lg-offset-1">
          <Heading classList="error-page__heading" headingLevel={1}>
            Page Not Found
          </Heading>
        </div>
        <div className="error-page__404 col-xs-12 col-lg-10 col-lg-offset-1">404</div>
        <div className="error-page__button col-xs-12 col-lg-10 col-lg-offset-1">
          <Link className="button button--inherit" to="/">Go back home
           
          </Link>
        </div>
      </div>
    </div>
    <div className="error-page__footer">
      <FooterSection />
    </div>
  </div>
);

export default Page404;
