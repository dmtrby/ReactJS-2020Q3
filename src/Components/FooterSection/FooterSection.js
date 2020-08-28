import React from 'react';

import './footer-section.scss';
import Logotype from '../Logotype';

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
