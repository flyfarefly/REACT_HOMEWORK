import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="modal-footer">{children}</div>;
  }
}

Footer.propTypes = {
  children: PropTypes.node
};
export default Footer;
