import PropTypes from 'prop-types';

const Body = (props) => <div className="card-body">{props.children}</div>;
Body.propTypes = {
  body: PropTypes.node.isRequired,
  children: PropTypes.node
};
export default Body;
