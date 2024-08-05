// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function BaseTemplate({ title = null, className = null, children }) {
  const baseClassName = cn({
    [className]: className
  });
  return (
    <div className={baseClassName}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

BaseTemplate.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default BaseTemplate;
