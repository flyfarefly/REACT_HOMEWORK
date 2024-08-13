import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactsSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { css } from '@emotion/react';
import { MuiTelInput } from 'mui-tel-input';

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const titleStyle = css`
  text-align: center;
`;

const buttonStyle = css`
  align-self: center;
`;

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must be 2 characters or more')
      .max(10, 'Must be 10 characters or less')
      .required('Name is required!'),
    phone: Yup.string().required('Phone number is required')
  });

  return (
    <Container>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(addContact({ id: Date.now(), ...values }));
          navigate('/');
        }}>
        {({ errors, touched, setFieldValue }) => (
          <Form css={formStyle}>
            <h1 css={titleStyle}>Add Contact</h1>
            <Field
              name="name"
              as={TextField}
              label="Name"
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
            <Field name="phone">
              {({ field }) => (
                <MuiTelInput
                  {...field}
                  label="Phone"
                  onChange={(value) => setFieldValue('phone', value)}
                  error={touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                />
              )}
            </Field>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              css={buttonStyle}>
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddContact;
