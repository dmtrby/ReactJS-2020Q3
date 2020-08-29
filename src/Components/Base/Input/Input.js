import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({
  type, placeHolder, labelText, classList, name, id,
}) => (labelText
  ? (
    <div className="input-field row">
      <label className="input-field__label col-xs-12" htmlFor={id}>{labelText}</label>
      <input className={`input-field__label__input col-xs-12 ${classList}`} type={type} placeholder={placeHolder} id={id} name={name} />
    </div>
  )
  : <input className={classList} type={type} placeholder={placeHolder} id={id} name={name} />);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  labelText: PropTypes.string,
  classList: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  placeHolder: '',
  labelText: '',
  classList: '',
  name: '',
  id: '',
};

export default Input;
