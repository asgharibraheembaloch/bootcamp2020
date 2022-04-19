import React, { useRef, useState } from "react";

function UserForm() {
  const name = useRef();
  const age = useRef();
  const [nameError, setNameError] = useState("");
  const [ageError, SetAgeError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.current.value) {
      setNameError("name is required");
    }
    if (!age.current.value) {
      SetAgeError("age is required");
    }
    if (name.current.value.length > 20) {
      setNameError("name field must be less than 20 characters");
    }
  };
  return (
    <div>
      <div>User form developed with React and validation is with React way</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" ref={name} type="text"></input>
          {nameError && <div style={{ color: "red" }}>{nameError}</div>}
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input id="age" ref={age} type="number"></input>
          {ageError && <div style={{ color: "red" }}>{ageError}</div>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
