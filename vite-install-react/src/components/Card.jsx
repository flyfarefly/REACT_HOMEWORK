import React from 'react';
import Body from './Body';
import Title from './Title';
import Text from './Text';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static Body = Body;
  static Title = Title;
  static Text = Text;

  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
