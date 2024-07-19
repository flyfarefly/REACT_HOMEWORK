import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  handleNext = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length
    }));
  };

  handlePrev = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + images.length) % images.length
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;
    const activeImage = images[currentIndex];

    return (
      // <div className="slider">
      //   <img src={activeImage} alt={`Slide ${currentIndex}`} />
      //   <img
      //     src={activeImage}
      //     style={{ width: '100%', height: '100%' }}
      //     alt={`Slide ${currentIndex}`}
      //     className="d-block w-100"
      //     src=""
      //   />
      //   <button onClick={this.handlePrev}>Назад</button>
      //   <button onClick={this.handleNext}>Вперед</button>
      // </div>
      <div
        id="carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        onClick={this.handleClick}>
        <div className="carousel-inner">
          <div className={activeImage}>
            <img
              alt={`Slide ${currentIndex}`}
              className="d-block w-100"
              src="../images/first.jpg"
            />
          </div>
        </div>
        <button
          onClick={this.handlePrev}
          className="carousel-control-prev"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={this.handleNext}
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

export default Slider;
