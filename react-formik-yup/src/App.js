//import UserForm from './ReactSimpleForm/UserForm';
import ReactFormikYub from './ReactFormikWithYubSchemaValidation/ReactFormikYub';
import UserForm from './ReactSimpleForm/UserForm';
import UserFormWithFormik from './ReactWithFormik/UserFormWithFormik';
import FormikContextApi from './UserFormWithFormikContextApi/FormikContextApi';
import UserFormWithMaterialUI from './UserFormWithFormikYup&MaterialUI/UserFormWithMaterialUI';

function App() {
  return (
    <div>
      <UserForm />
      <br />
      <UserFormWithFormik />
      <br />
      <ReactFormikYub />
      <br />
      <FormikContextApi />
      <br />
      <UserFormWithMaterialUI />
    </div>
  );
}

export default App;
