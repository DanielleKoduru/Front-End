import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import signUpSchema from "./signUpSchema";

const initialSignUpValues = {
  username: "",
  email: "",
  password: "",
};

const initialSignUpErrors = {
  username: "",
  email: "",
  password: "",
};

const initialDisabled = true;

const SignUp = (props) => {
  console.log(props);
  const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
  const [signUpErrors, setSignUpErrors] = useState(initialSignUpErrors);
  const [disabledLogin, setDisabledLogin] = useState(initialDisabled);

  //   const postNewUsers = (newUser) => {
  //     axios
  //       .get("")
  //       .post(`https://reqres.in/api/users`, newUser)
  //       .then((response) => {
  //         setUsers([...users, response.data]);
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  const validate = (name, value) => {
    yup
      .reach(signUpSchema, name)
      .validate(value)
      .then((valid) => {
        setSignUpErrors({
          ...signUpErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setSignUpErrors({
          ...signUpErrors,
          [name]: error.errors[0],
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    change(name, value);
  };
  const change = (name, value) => {
    validate(name, value);
    setSignUpValues({
      ...signUpValues,
      [name]: value,
    });
  };

  const register = (newUser) => {
    axios
      .post("https://potluck-planner-tt104.herokuapp.com/signup", newUser)
      .then((res) => {
        console.log(res);
        props.SignUp(res.data);
      })
      .catch((err) => console.log(`Something went wrong: ${err}`));
  };

  const submit = () => {
    const newUser = {
      username: signUpValues.username.trim(),
      email: signUpValues.email.trim(),
      password: signUpValues.password.trim(),
    };
    register(newUser);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };
  useEffect(() => {
    signUpSchema.isValid(signUpValues).then((valid) => {
      setDisabledLogin(!valid);
    });
  }, [signUpValues]);

  return (
    <form onSubmit={onSubmit}>
      <h1>Login Form</h1>

      <div>
        <div>{signUpErrors.username}</div>
        <div>{signUpErrors.email}</div>
        <div>{signUpErrors.password}</div>
      </div>

      <label>Username: </label>
      <input
        value={signUpValues.username}
        onChange={onInputChange}
        name="username"
        type="username"
      />

      <label>Email: </label>
      <input
        value={signUpValues.email}
        onChange={onInputChange}
        name="email"
        type="email"
      />

      <label>Password: </label>
      <input
        value={signUpValues.password}
        onChange={onInputChange}
        name="password"
        type="password"
      />

      <button disabled={disabledLogin} id="submitBtn">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
