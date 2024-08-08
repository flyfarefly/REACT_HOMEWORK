// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../../utils/localStorage';
import {
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

function AllTodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  return (
    <Box p={4} m={3} bgcolor="#f9f9f9" borderRadius={4}>
      <Typography variant="h4" mb={3}>
        All Todos
      </Typography>
      <List>
        {todos.map((todo) => (
          <Box
            key={todo.id}
            p={2}
            mb={2}
            border={1}
            borderRadius={2}
            borderColor="grey.400">
            <ListItem>
              <ListItemText>
                <Link
                  to={`/todo/${todo.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="h6">{todo.title}</Typography>
                </Link>
                <Typography variant="body2">{todo.description}</Typography>
                <Typography variant="body2">Status: {todo.status}</Typography>
              </ListItemText>
            </ListItem>
          </Box>
        ))}
      </List>
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" component={Link} to="/" sx={{ mx: 1 }}>
          Повернутися на головну сторінку
        </Button>
      </Box>
    </Box>
  );
}

export default AllTodosPage;
