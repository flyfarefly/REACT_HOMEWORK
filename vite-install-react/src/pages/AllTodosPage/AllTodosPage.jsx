import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../../utils/localStorage';
import { Button } from '@mui/material';

function AllTodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  return (
    <div>
      <h1>All Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
      <Button variant="contained" component={Link} to="/">
        Повернутися на головну сторінку
      </Button>
    </div>
  );
}

export default AllTodosPage;
