import React from 'react';
import Header from './Header'; // Переконайтеся, що шлях до файлу Header вірний
import Body from './Body'; // Переконайтеся, що шлях до файлу Body вірний
import Footer from './Footer';
import PropTypes from 'prop-types'; // Переконайтеся, що шлях до файлу Footer вірний

class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { isOpen, children } = this.props;
    if (!isOpen) return null;

    return (
      <div
        className="modal fade show"
        style={{ display: 'block' }}
        role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired
};
export default Modal;
