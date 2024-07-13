import ListGroup from './components/ListGroup.jsx';
import ListGroupItem from './components/ListGroupItem.jsx';

function App() {
  return (
    <>
      <ListGroup />
      {/* eslint-disable-next-line react/no-children-prop */}
      <ListGroupItem children={<p>One</p>} />
      {/* eslint-disable-next-line react/no-children-prop */}
      <ListGroupItem children={<p>Two</p>} />
    </>
  );
}

export default App;
