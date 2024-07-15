import React from 'react';
import classNames from 'classnames';

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isToggleOff: false,
      secondary: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(({ secondary }) => ({ secondary: !secondary }));

    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      isToggleOff: !prevState.isToggleOff
    }));
  };

  render() {
    const buttonClassLeft = classNames([
      'btn btn-secondary',
      this.state.secondary ? 'left active' : 'left'
    ]);

    const buttonClassRight = classNames([
      'btn btn-secondary',
      this.state.secondary ? 'right' : 'right active'
    ]);

    return (
      <div
        className="btn-group btn-group-lg"
        role="group"
        aria-label="Basic example">
        <button
          type="button"
          className={buttonClassLeft}
          onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Увімкено' : 'Вимкнено'}
        </button>

        <button
          type="button"
          className={buttonClassRight}
          onClick={this.handleClick}>
          {this.state.isToggleOff ? 'Увімкено' : 'Вимкнено'}
        </button>
      </div>
    );
  }
}

BtnGroup.defaultProps = {
  isToggleOn: false,
  isToggleOff: false,
  secondary: true
};

export default BtnGroup;
