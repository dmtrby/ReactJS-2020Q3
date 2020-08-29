import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ headingLevel, children, classList }) => {
  const CustomHeader = `h${headingLevel}`;
  return <CustomHeader className={classList}>{children}</CustomHeader>;
};

Heading.propTypes = {
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  classList: PropTypes.string,
};

Heading.defaultProps = {
  classList: '',
};

export default Heading;
