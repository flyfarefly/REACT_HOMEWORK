import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListGroup = (children, className, tag, ...attrs) => {
  const classes = classNames(`list-group`, className);

  return (
    <tag className={classes} {...attrs}>
      {children}
    </tag>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ListGroup.defaultProps = {
  children: null,
  className: ``,
  tag: 'ul'
};

export default ListGroup;
