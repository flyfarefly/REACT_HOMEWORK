import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ListGroupItem extends React.Component {
  render() {
    const { children, className, ...attrs } = this.props;

    const classes = classNames(`list-group-item`, className);

    return (
      <li className={classes} {...attrs}>
        {children}
      </li>
    );
  }
}

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

ListGroupItem.defaultProps = {
  children: null,
  className: ``
};

export default ListGroupItem;
