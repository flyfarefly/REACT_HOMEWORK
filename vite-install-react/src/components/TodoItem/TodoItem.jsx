// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

function TodoItem({ todo, onDelete }) {
  return (
    <Box p={2} mb={2} border={1} borderRadius={2} borderColor="grey.400">
      <Typography variant="h5" mb={1}>
        {todo.title}
      </Typography>
      <Typography variant="body1" mb={2}>
        {todo.description}
      </Typography>
      <Typography variant="body2" mb={2}>
        Status: {todo.status}
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onDelete(todo.id)}
          sx={{ mr: 1 }}>
          Delete
        </Button>
        <Button variant="contained" component={Link} to={`/todo/${todo.id}`}>
          View
        </Button>
      </Box>
    </Box>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoItem;
