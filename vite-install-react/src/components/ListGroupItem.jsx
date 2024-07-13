import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListGroupItem = (children, className, tag, ...attrs) => {
  const classes = classNames(`list-group-item`, className);

  return (
    <tag className={classes} {...attrs}>
      {children}
    </tag>
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

ListGroupItem.defaultProps = {
  children: null,
  className: ``,
  tag: 'li'
};

export default ListGroupItem;
