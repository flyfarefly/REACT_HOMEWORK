import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../store/contactsSlice';
import { useNavigate, useParams } from 'react-router-dom';
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
  padding: 20px;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const titleStyle = css`
  text-align: center;
  color: #333;
`;

const buttonStyle = css`
  align-self: center;
  margin-top: 20px;
`;

const EditContact = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state.contacts.contacts);
  const contact = contacts.find((contact) => contact.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!contact) {
      navigate('/');
    }
  }, [contact, navigate]);

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
        initialValues={{
          name: contact ? contact.name : '',
          phone: contact ? contact.phone : ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(updateContact({ id: parseInt(id), ...values }));
          navigate('/');
        }}>
        {({ errors, touched, setFieldValue }) => (
          <Form css={formStyle}>
            <h1 css={titleStyle}>Edit Contact</h1>
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
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default EditContact;
