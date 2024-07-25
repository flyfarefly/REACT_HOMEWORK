// eslint-disable-next-line no-unused-vars
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoBox extends React.Component {
  state = {
    todos: [],
    inputValue: ''
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    const { inputValue, todos } = this.state;
    if (inputValue.trim()) {
      const newTodo = {
        id: uuidv4(), // Використовуйте функцію uniqueId для отримання нового ID
        text: inputValue
      };
      this.setState({
        todos: [newTodo, ...todos],
        inputValue: ''
      });
    }
  };

  handleRemoveTodo = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, inputValue } = this.state;

    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
            placeholder="I am going..."
          />
          <button type="submit">add</button>
        </form>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <button onClick={() => this.handleRemoveTodo(todo.id)}>
                Remove
              </button>
              {todo.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoBox;
