import React from 'react';
import PropTypes from 'prop-types';

class Body extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="modal-body">{children}</div>;
  }
}
Body.propTypes = {
  children: PropTypes.node
};
export default Body;
