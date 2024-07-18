// import Carousel from './components/Carousel.jsx';
import Slider from './components/Slider.jsx';

const images = [
  '../images/first.jpg',
  '../images/second.jpg',
  '../images/third.jpg'
];

function App() {
  return (
    <>
      {/*<Carousel></Carousel>*/}
      <Slider images={images} />
    </>
  );
}

export default App;
