import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { toggle, children } = this.props;
    return (
      <div className="modal-header">
        <h5 className="modal-title">{children}</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={toggle}></button>
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.func
};

export default Header;
