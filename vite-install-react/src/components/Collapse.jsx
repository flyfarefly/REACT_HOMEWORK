import React from 'react';

class Collapse extends React.Component {
  render() {
    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded="false">
            Link with href
          </a>
        </p>
        <div className="collapse">
          <div className="card card-body">collapse me</div>
        </div>
      </div>
    );
  }
}

export default Collapse;
