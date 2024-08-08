// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import PropTypes from 'prop-types';

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  status: Yup.string().required('Required')
});

function TodoForm({ onSubmit, initialValues }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={2}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          multiline
          id="description"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
      </Box>
      <Box mb={2}>
        <TextField
          select
          fullWidth
          id="status"
          name="status"
          label="Status"
          value={formik.values.status}
          onChange={formik.handleChange}
          error={formik.touched.status && Boolean(formik.errors.status)}
          helperText={formik.touched.status && formik.errors.status}>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="not-completed">Not Completed</MenuItem>
        </TextField>
      </Box>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
};

export default TodoForm;
