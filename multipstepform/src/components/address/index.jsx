import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';

export const Address = ({submit,setFormValues, prevValues}) => {
  return (
    <Formik
      initialValues={prevValues}
      validationSchema={Yup.object({
        area: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        city: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values) => {
        submit(1)
        setFormValues({...values})
      }}
    >
      <Form>
        <Field as={TextField} label="Area Name" name="area" type="text" />
        <ErrorMessage name="area" />
        <br />
        <br />
        <Field as={TextField} label="City Name" name="city" type="text" />
        <ErrorMessage name="city" />
        <br />
        <br />
        <Field as={TextField} label="Email Adress" name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};