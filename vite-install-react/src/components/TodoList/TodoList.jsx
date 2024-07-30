import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

function TodoList() {
  const [data, setData] = useState([]);

  const handleSubmit = (todoItem) => {
    setData((prevData) => [...prevData, todoItem]);
  };

  return (
    <div className="todo-list">
      <div className="text-center">
        <h1>Todo List</h1>
      </div>
      <Container>
        <Row>
          <Col xs={6}>
            <TodoForm onSubmit={handleSubmit} />
          </Col>
          <Col xs={6}>
            <Row>
              {data.map(({ title, description }, index) => (
                <Col
                  key={title + '_' + index}
                  data-id={title + '_' + index}
                  xs={4}
                  className="mb-4">
                  <TodoItem title={title} body={description} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TodoList;
