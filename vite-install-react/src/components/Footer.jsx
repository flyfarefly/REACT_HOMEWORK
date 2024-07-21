import PropTypes from 'prop-types';

const Footer = (props) => <div className="modal-footer">{props.children}</div>;

Footer.propTypes = {
  footer: PropTypes.elementType,
  children: PropTypes.node
};

export default Footer;
