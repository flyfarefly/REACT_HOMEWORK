// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoItemPage from './pages/TodoItemPage';
import AllTodosPage from './pages/AllTodosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoItemPage />} />
        <Route path="/all-todos" element={<AllTodosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
