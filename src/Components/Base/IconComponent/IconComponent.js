import React from 'react';
import PropTypes from 'prop-types';

import './icon.scss';

const IconComponent = ({
  xlinkHref, classList, color, size,
}) => {
  const colorClass = `icon--${color}`;
  const sizeClass = size && `icon--${size}`;
  const classes = `${classList ? `icon ${classList}` : 'icon'}`;

  return (
    <svg className={[classes, sizeClass, colorClass].join(' ')}>
      <use xlinkHref={xlinkHref} />
    </svg>
  );
};

IconComponent.propTypes = {
  xlinkHref: PropTypes.string.isRequired,
  classList: PropTypes.string,
  color: PropTypes.oneOf(['light', 'primary']),
  size: PropTypes.oneOf(['small', '', 'large']),
};

IconComponent.defaultProps = {
  classList: '',
  color: 'primary',
  size: '',
};

export default IconComponent;
