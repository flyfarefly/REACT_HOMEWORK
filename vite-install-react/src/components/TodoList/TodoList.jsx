// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

function TodoList({ todos, onDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoList;
