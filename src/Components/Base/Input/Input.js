import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ type, placeHolder, labelText, classList, name, id, onChange, value, disabled }) =>
  (labelText ? (
    <div className="input-field row">
      <label className="input-field__label col-xs-12" htmlFor={id}>
        {labelText}
      </label>
      <input
        className={`input-field__label__input col-xs-12 ${classList}`}
        type={type}
        placeholder={placeHolder}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  ) : (
    <input
      className={classList}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeHolder}
      id={id}
      name={name}
    />
  ));

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  labelText: PropTypes.string,
  classList: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => console.warn('no change handler'),
  value: '',
  placeHolder: '',
  labelText: '',
  classList: '',
  name: '',
  id: '',
  disabled: false,
};

export default Input;
