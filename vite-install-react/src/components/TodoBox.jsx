// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoBox() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: uuidv4(),
        text: inputValue
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="I am going..."
        />
        <button type="submit">add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoBox;
