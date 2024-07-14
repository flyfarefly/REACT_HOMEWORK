import React from 'react';
import classNames from 'classnames';

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isToggleOff: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      isToggleOff: !prevState.isToggleOff
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
          {this.state.isToggleOff ? 'Увімкено' : 'Вимкнено'}
        </button>
      </div>
    );
  }
}

export default BtnGroup;
