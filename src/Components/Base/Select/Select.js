import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import './select.scss';

const customStyles = {};

const MySelect = ({ id, onChange, onBlur, value, options, className }) => (
  <Select
    options={options}
    className={`${className} select`}
    styles={customStyles}
    theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#555555',
        primary: 'white',
        neutral0: '#424242',
      },
    })}
    classNamePrefix="select"
    isMulti
    id={id}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
);

MySelect.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
};

MySelect.defaultProps = {
  className: '',
  onBlur: () => {},
};

export default MySelect;
