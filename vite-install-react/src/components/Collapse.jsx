import React from 'react';
import classNames from 'classnames';

class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      text: null
    };
  }

  render() {
    const collapseHide = classNames([
      'collapse',
      this.state.open ? 'show' : null
    ]);

    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={this.state.open}
            onClick={() => this.setState({ open: !this.state.open })}>
            Link with href
          </a>
        </p>
        <div className={collapseHide}>
          {/* eslint-disable-next-line react/prop-types */}
          <div className="card card-body">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
Collapse.defaultProps = {
  open: false,
  text: null
};

export default Collapse;
