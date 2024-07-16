import React from 'react';
import classNames from 'classnames';

class CollapseAnother extends React.Component {
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

        <div className={collapseHide} aria-expanded={this.state.open}>
          {/* eslint-disable-next-line react/prop-types */}
          <div className="card card-body">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

CollapseAnother.defaultProps = {
  open: false,
  text: null
};

export default CollapseAnother;
