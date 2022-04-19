import { useFormik } from "formik";
import * as Yup from 'yup'

function ReactFormikYub() {
  const formik = useFormik({
      initialValues:{
          name: '',
          age: 0
      },
      onSubmit: (values)=>{
          console.log(values)
      },
      validationSchema: Yup.object({
        name: Yup.string()
                 .required('name is required')
                 .max(15, 'name field must be less than 15 characters'),
        age: Yup.number()
                .required('age is required')
                .max(60, 'age should be less than 60')
                .min(18, 'age should be geater than 18')
      })
  });
  return (
    <div>
      <div>User form developed with formik and validation is with Yup</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
          {formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null}
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input id="age" type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
          ></input>
          {formik.errors.age ? <div style={{ color: "red" }}>{formik.errors.age}</div>  : null}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ReactFormikYub;
