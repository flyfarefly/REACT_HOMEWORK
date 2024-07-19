// import Carousel from './components/Carousel.jsx';
import Slider from './components/Slider.jsx';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const images = ({ image1, image2, image3 } = {});
function App() {
  return (
    <>
      {/*<Carousel></Carousel>*/}
      <Slider images={images} title="Slider example" />
    </>
  );
}

export default App;
