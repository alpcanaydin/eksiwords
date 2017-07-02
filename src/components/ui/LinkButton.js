import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.css';

const LinkButton = ({ primary, secondary, className, children, ...otherProps }) => {
  const classNames = ['Button'];

  if (primary) {
    classNames.push('Button--primary');
  }

  if (secondary) {
    classNames.push('Button--secondary');
  }

  classNames.push(className);

  return <Link className={classNames.join(' ')} {...otherProps}>{children}</Link>;
};

LinkButton.defaultProps = {
  className: '',
  primary: undefined,
  secondary: undefined,
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default LinkButton;
