import { useFormik } from "formik";

function UserFormWithFormik() {
  const formik = useFormik({
      initialValues:{
          name: '',
          age: 0
      },
      onSubmit: (values)=>{
          console.log(values)
      },
      validate: (values)=>{
          const error = {};
          if(!values.name){
              error.name = "name is required"
          }
          else if(values.name.length > 20){
            error.name = "name must be less than 20 characters"
        }
        return error;
      }
  });
  return (
    <div>
      <div>User form developed with formik and validation is with formik</div>
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

export default UserFormWithFormik;
