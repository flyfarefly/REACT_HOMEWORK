import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import { getTodos, saveTodos } from '../../utils/localStorage';
import { Button, Box } from '@mui/material';

function TodoItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const todos = getTodos();
    const currentTodo = todos.find((item) => item.id === id);
    setTodo(currentTodo);
  }, [id]);

  const handleEditTodo = (updatedTodo) => {
    const todos = getTodos();
    const newTodos = todos.map((item) => (item.id === id ? updatedTodo : item));
    saveTodos(newTodos);
    setTodo(updatedTodo);
    alert('Todo item updated successfully');
  };

  const handleDeleteTodo = () => {
    const todos = getTodos();
    const newTodos = todos.filter((item) => item.id !== id);
    saveTodos(newTodos);
    navigate('/');
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <Box p={2} m={2} bgcolor="#f9f9f9" borderRadius={2}>
      <h1>Todo Item</h1>
      <TodoForm onSubmit={handleEditTodo} initialValues={todo} />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteTodo}
          sx={{ mr: 2 }}>
          Delete
        </Button>
        <Button variant="contained" component={Link} to="/">
          Повернутися на головну сторінку
        </Button>
      </Box>
    </Box>
  );
}

export default TodoItemPage;
