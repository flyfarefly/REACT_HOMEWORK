import React from 'react';

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

export default Alert;
