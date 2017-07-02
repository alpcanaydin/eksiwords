import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.css';

const LinkButton = ({ primary, secondary, className, children, ...otherProps }) => {
  const classNames = classnames(className, 'Button', {
    'Button--primary': primary,
    'Button--secondary': secondary,
  });

  return <Link className={classNames} {...otherProps}>{children}</Link>;
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
