import PropTypes from 'prop-types';

const Title = (props) => <h4 className="card-title">{props.children}</h4>;
Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
export default Title;
