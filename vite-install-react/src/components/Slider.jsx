import React from 'react';
import PropTypes from 'prop-types';

class Slider extends React.Component {
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
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className={activeImage}>
            <img
              alt={`Slide ${currentIndex}`}
              className="d-block w-100"
              src={activeImage}
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

Slider.propTypes = {
  images: PropTypes.array.isRequired
};

export default Slider;
