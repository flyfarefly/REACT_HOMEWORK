// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import TodoForm from '../../components/TodoForm';
import { getTodos, saveTodos } from '../../utils/localStorage';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function Home() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const handleAddTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now().toString() };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    saveTodos(newTodos);
    navigate(`/todo/${newTodo.id}`);
  };

  return (
    <Box p={2} m={3} bgcolor="#f9f9f9" borderRadius={4}>
      <Box mb={3}>
        <h1>Головна сторінка</h1>
      </Box>
      <Box mb={3}>
        <TodoForm
          onSubmit={handleAddTodo}
          initialValues={{ title: '', description: '', status: 'pending' }}
        />
      </Box>
      <Box>
        <Button variant="contained" component={Link} to="/all-todos">
          Переглянути всі Todo
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
