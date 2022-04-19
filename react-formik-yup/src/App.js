//import UserForm from './ReactSimpleForm/UserForm';
import ReactFormikYub from './ReactFormikWithYubSchemaValidation/ReactFormikYub';
import UserForm from './ReactSimpleForm/UserForm';
import UserFormWithFormik from './ReactWithFormik/UserFormWithFormik';
import FormikContextApi from './UserFormWithFormikContextApi/FormikContextApi';

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
    </div>
  );
}

export default App;
