import React from 'react';
import PropTypes from 'prop-types';

import Body from './Body';
import Header from './Header';
import Footer from './Footer';

class Modal extends React.Component {
  static Body = Body;
  static Footer = Footer;
  static Header = Header;

  render() {
    return (
      // <div className="modal" style={{ display: 'none' }} role="dialog">
      <div className="modal fade show" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <Header header={this.props.children} />
            <Body body={this.props.children} />
            <Footer footer={this.props.children} />
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node
};

Modal.defaultProps = {};

export default Modal;
