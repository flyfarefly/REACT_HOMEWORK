import Collapse from './components/Collapse.jsx';
import CollapseAnother from './components/CollapseAnother.jsx';

function App() {
  const text = 'collapse me';

  return (
    <>
      <Collapse text={text} open={false} />
      <CollapseAnother text={text} open={true} />
    </>
  );
}

export default App;
