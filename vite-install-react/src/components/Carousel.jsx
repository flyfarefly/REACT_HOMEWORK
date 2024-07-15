import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="" className="d-block w-100" src="../images/first.jpg" />
          </div>
          <div className="carousel-item">
            <img alt="" className="d-block w-100" src="../images/second.jpg" />
          </div>
          <div className="carousel-item">
            <img alt="" className="d-block w-100" src="../images/third.jpg" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
