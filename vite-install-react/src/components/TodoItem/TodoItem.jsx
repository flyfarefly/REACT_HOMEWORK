import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function TodoItem({ title, body }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Button type="delete" onClick={() => this.handleRemoveTodo(todo.id)}>
        Delete
      </Button>
    </Card>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default TodoItem;
