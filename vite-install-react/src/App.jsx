import Slider from './components/Slider.jsx';
import imageOne from './images/first.jpg';
import imageTwo from './images/second.jpg';
import imageThree from './images/third.jpg';

function App() {
  const images = [imageOne, imageTwo, imageThree];
  return (
    <>
      <Slider images={images} />
    </>
  );
}

export default App;
