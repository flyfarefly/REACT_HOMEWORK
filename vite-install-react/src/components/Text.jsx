import PropTypes from 'prop-types';

const Text = (props) => <p className="card-text">{props.children}</p>;

Text.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
};
export default Text;
