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
<<<<<<< HEAD
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
=======
    username: '',
    email: '',
    password: '',
}

const initialUsers = []
const initialDisabled = true


const SignUp = () => {
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
    const [signUpErrors, setSignUpErrors] = useState(initialSignUpErrors);
    const [disabledLogin, setDisabledLogin] = useState(initialDisabled);
    const [users, setUsers] = useState(initialUsers);

    const postNewUsers = (newUser) => {
        axios
            .post(`https://potluck-planner-tt104.herokuapp.com//signup`, newUser)
            .then((response) => {
                setUsers([...users, response.data]);
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const validate = (name, value) => {
        yup
            .reach(signUpSchema, name)
            .validate(value)
            .then((valid) => {
                setSignUpErrors({
                    ...signUpErrors,
                    [name]: '',
                });
            })
            .catch((error) => {
                setSignUpErrors({
                    ...signUpErrors,
                    [name]: error.errors[0],
                });
            });
    }


    const onInputChange = (event) => {
        const { name, value } = event.target;
        change(name, value);
    }
    const change = (name, value) => {
        validate(name, value)
        setSignUpValues({
            ...signUpValues,
            [name]: value
        })
    }


    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const submit = () => {
        const newUser = {
            username: signUpValues.username.trim(),
            email: signUpValues.email.trim(),
            password: signUpValues.password.trim()
        }
        postNewUsers(newUser)
    }


    useEffect(() => {
        signUpSchema.isValid(signUpValues)
            .then(valid => {
                setDisabledLogin(!valid)
            })
    }, [signUpValues])



    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>

            <div>
                <div>{signUpErrors.username}</div>
                <div>{signUpErrors.email}</div>
                <div>{signUpErrors.password}</div>
            </div>
            <div className='username'>
                <label>Username:  </label>
                <input
                    value={signUpValues.username}
                    onInputChange={onInputChange}
                    name='username'
                    type='username'
                />
            </div>

            <div className='email'>
                <label>Email:  </label>
                <input
                    value={signUpValues.email}
                    onInputChange={onInputChange}
                    name='email'
                    type='email'
                />
            </div>

            <div className='password'>
                <label>Password:  </label>
                <input
                    value={signUpValues.password}
                    onInputChange={onInputChange}
                    name='password'
                    type='password'
                />
            </div>

            <button disabledLogin={disabledLogin} id='submitBtn'>Submit</button>
        </form>
    )
}
>>>>>>> e524d8df8d8a6a202a505e799a3cbfdf76f3e1e3

export default SignUp;
