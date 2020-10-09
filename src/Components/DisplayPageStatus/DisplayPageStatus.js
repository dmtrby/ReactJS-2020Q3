/* eslint-disable react/forbid-prop-types */
import React from 'react';

import './page-status.scss';

const DisplayPageStatus = ({ children }) => (
  <div className="page-status container">
    <div className="row center-xs">
      <div className="col-xs-12">{children}</div>
    </div>
  </div>
);

export default DisplayPageStatus;
