import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function TodoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = ({ target }) => {
    setFormData((prevData) => ({
      ...prevData,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    for (const key in formData) {
      if (formData[key].trim() === '') {
        return alert(`${key} is empty`);
      }
    }
    onSubmit({ ...formData });
  };

  const { title, description } = formData;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="todoItemTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          as="textarea"
          type="text"
          placeholder="Enter todo item title"
          onChange={handleChange}
          value={title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="todoItemDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          type="text"
          placeholder="Enter todo item description"
          onChange={handleChange}
          value={description}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
