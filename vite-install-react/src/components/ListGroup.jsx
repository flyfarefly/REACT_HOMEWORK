import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ListGroup extends React.Component {
  render() {
    const { children, className, ...attrs } = this.props;

    const classes = classNames(`list-group`, className);

    return (
      <ul className={classes} {...attrs}>
        {children}
      </ul>
    );
  }
}

ListGroup.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string
};

ListGroup.defaultProps = {
  children: null,
  className: ``
};

export default ListGroup;
