import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handleSubmit = (todoItem) => {
    this.setState({ data: [...this.state.data, todoItem] });
  };

  render() {
    return (
      <div className="todo-list">
        <div className="text-center">
          <h1>Todo List</h1>
        </div>
        <Container>
          <Row>
            <Col xs={6}>
              <TodoForm onSubmit={this.handleSubmit} />
            </Col>
            <Col xs={6}>
              <Row>
                {this.state.data.map(({ title, description }, index) => {
                  return (
                    <Col
                      key={title + '_' + index}
                      data-id={title + '_' + index}
                      xs={4}
                      className="mb-4">
                      <TodoItem title={title} body={description} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TodoList;
