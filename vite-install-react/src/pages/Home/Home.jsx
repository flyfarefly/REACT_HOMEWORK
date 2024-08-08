import React, { useState, useEffect } from 'react';
import TodoForm from '../../components/TodoForm';
import { getTodos, saveTodos } from '../../utils/localStorage';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

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
    <Box p={4} m={3} bgcolor="#f9f9f9" borderRadius={4}>
      <Typography variant="h4" mb={3}>
        Головна сторінка
      </Typography>
      <Box mb={3}>
        <TodoForm
          onSubmit={handleAddTodo}
          initialValues={{ title: '', description: '', status: 'pending' }}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          component={Link}
          to="/all-todos"
          sx={{ mx: 1 }}>
          Переглянути всі Todo
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
