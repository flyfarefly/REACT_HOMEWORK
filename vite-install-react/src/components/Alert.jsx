import React from 'react';
import PropTypes from 'prop-types';

class Alert extends React.Component {
  static defaultProps = {
    type: null
  };

  render() {
    const { type, children } = this.props;
    return (
      <div className="row">
        {type && (
          <div className={'alert alert-' + type} role="alert">
            {children}
          </div>
        )}
      </div>
    );
  }
}
Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};

export default Alert;
