import React from 'react';

import Logotype from '../Logotype';

import './footer-section.scss';

const FooterSection = () => (
  <footer className="footer padding-top-1 padding-bottom-1">
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs">
          <div className="row center-xs">
            <Logotype />
          </div>
        </div>
      </div>
    </div>
  </footer>

);

export default FooterSection;
