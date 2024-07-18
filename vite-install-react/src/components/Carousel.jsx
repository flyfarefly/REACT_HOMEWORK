// import React from 'react';
// import classNames from 'classnames';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    };
  }

  handleClick = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }));
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const myCarouselElement = document.querySelector('#myCarousel');

    // const carousel = new bootstrap.Carousel(myCarouselElement, {
    //   interval: 2000,
    //   touch: false
    // });

    const carouselItem = classNames([
      'carousel-item',
      this.state.isActive ? 'active' : null
    ]);

    return (
      <div
        id="carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        onClick={this.handleClick}>
        <div className="carousel-inner">
          <div className={carouselItem}>
            <img alt="" className="d-block w-100" src="../images/first.jpg" />
          </div>
          <div className={carouselItem}>
            <img alt="" className="d-block w-100" src="../images/second.jpg" />
          </div>
          <div className={carouselItem}>
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
