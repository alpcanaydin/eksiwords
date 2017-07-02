import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ primary, secondary, className, children, ...otherProps }) => {
  const classNames = ['Button'];

  if (primary) {
    classNames.push('Button--primary');
  }

  if (secondary) {
    classNames.push('Button--secondary');
  }

  classNames.push(className);

  return <button className={classNames.join(' ')} {...otherProps}>{children}</button>;
};

Button.defaultProps = {
  className: '',
  primary: undefined,
  secondary: undefined,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
