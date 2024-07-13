import React from 'react';
import classNames from 'classnames';

class BtnGroup extends React.Component {
  render() {
    return (
      <div
        className="btn-group btn-group-lg"
        role="group"
        aria-label="Basic example">
        <button type="button" className="btn btn-secondary left">
          Left
        </button>
        <button type="button" className="btn btn-secondary right">
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
