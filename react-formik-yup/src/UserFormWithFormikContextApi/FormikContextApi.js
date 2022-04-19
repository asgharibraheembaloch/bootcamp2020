//import { useFormik, formik } from "formik";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function FormikContextApi() {
  return (
    <div>
      <div>User form developed with formik context api and validation is with Yup</div>
      <Formik
        initialValues={{
          name: "",
          age: 0,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("name is required")
            .max(15, "name field must be less than 15 characters"),
          age: Yup.number()
            .required("age is required")
            .max(60, "age should be less than 60")
            .min(18, "age should be geater than 18"),
        })}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" render={(msg)=>(
                  <span style={{color: 'red'}}>{msg}</span>
              )} />
            </div>
            <div>
              <label htmlFor="age">Age: </label>
              <Field type="number" name="age" id="age" />
              <ErrorMessage name="age" render={(msg)=>(
                  <span style={{color: 'red'}}>{msg}</span>
              )} />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContextApi;
