import React from 'react';
import classNames from 'classnames';

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    };
  }

  handleClick = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }));
  };

  render() {
    const collapseHide = classNames([
      'collapse',
      this.state.isActive ? 'show' : null
    ]);

    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded="false"
            onClick={this.handleClick}>
            Link with href
          </a>
        </p>
        <div className={collapseHide}>
          <div className="card card-body">collapse me</div>
        </div>
      </div>
    );
  }
}

export default Collapse;
