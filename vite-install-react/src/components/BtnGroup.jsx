import React from 'react';
import classNames from 'classnames';

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <div
        className="btn-group btn-group-lg"
        role="group"
        aria-label="Basic example">
        <button
          type="button"
          onClick={this.handleClick}
          className="btn btn-secondary left">
          {this.state.isToggleOn ? 'Увімкено' : 'Вимкнено'}
        </button>

        <button
          type="button"
          onClick={this.handleClick}
          className="btn btn-secondary right">
          {this.state.isToggleOn ? 'Вимкнено' : 'Увімкено'}
        </button>
      </div>
    );
  }
}

export default BtnGroup;
