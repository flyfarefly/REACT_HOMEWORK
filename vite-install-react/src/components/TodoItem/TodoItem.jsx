// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function TodoItem({ title, body, handleRemoveTodo }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Button type="delete" onClick={handleRemoveTodo}>
        Delete
      </Button>
    </Card>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired
};

export default TodoItem;
