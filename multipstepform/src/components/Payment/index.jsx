import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';

export const Payment = ({submit, setFormValues, prevValues}) => {
  return (
    <Formik
      initialValues={prevValues}
      validationSchema={Yup.object({
        cardName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        cardNumber: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values) => {
        submit(2);
        setFormValues({...values})
      }}
    >
      <Form>
        <Field as={TextField} label="Card Name" name="cardName" type="text" />
        <ErrorMessage name="cardName" />
        <br />
        <br />
        <Field as={TextField} label="Card Number" name="cardNumber" type="text" />
        <ErrorMessage name="cardNumber" />
        <br />
        <br />
        <button onClick={()=>submit(0)}>Back</button>
        <button type="submit">Submit</button>        
      </Form>
    </Formik>
  );
};