import Alert from './components/Alert.jsx';
import React from 'react';

function App() {
  return (
    <>
      <h1>Bootstrap Alert</h1>
      <Alert type="danger">
        <h2 className="alert heading">what is love?</h2>
      </Alert>
      <Alert type="info">
        <h2 className="alert heading">what is love?</h2>
      </Alert>
      <Alert type="success">
        <h2 className="alert heading">what is love?</h2>
      </Alert>
    </>
  );
}

export default App;
