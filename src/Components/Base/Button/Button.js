import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

class Button extends React.Component {
  handleButtonClick = (e) => {
    const { disabled, onClick } = this.props;
    if (!disabled && onClick) {
      onClick({ e });
    }
  }

  renderChildren = () => {
    const { text, children } = this.props;
    return text || children;
  }

  renderClasses = () => {
    const { variant, classList } = this.props;
    let classes = 'button ';
    switch (variant) {
      case 'primary':
        classes += 'button--primary';
        break;
      case 'secondary':
        classes += 'button--secondary';
        break;
      case 'with-icon':
        classes += 'button--icon';
        break;
      case 'text':
        classes += 'button--text';
        break;
      default:
        classes += '';
    }

    return `${classes}  ${classList}`;
  }

  render() {
    const { type } = this.props;
    return (
      <button
        type={type}
        onClick={this.handleButtonClick}
        className={this.renderClasses()}
      >
        {this.renderChildren()}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  classList: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'with-icon', 'text', 'secondary']),
};

Button.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.warn('Here is no click handler (つ▀¯▀)つ'),
  disabled: false,
  classList: '',
  text: '',
  type: 'button',
  children: '',
  variant: '',
};

export default Button;
