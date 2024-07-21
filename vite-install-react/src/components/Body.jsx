import PropTypes from 'prop-types';

const Body = (props) => <div className="modal-body">{props.children}</div>;
Body.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node
};
export default Body;
