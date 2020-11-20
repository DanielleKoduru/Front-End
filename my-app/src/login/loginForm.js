
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import loginSchema from './loginSchema';
import { useHistory, Link } from 'react-router-dom';
import { Login } from '../styled-components';


const initialLoginValues = {

    email: "",
    password: "",
};

const initialLoginErrors = {
    email: "",
    password: "",
};

const initialDisabled = true;

const LoginForm = (props) => {

    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
    const [disabledLogin, setDisabledLogin] = useState(initialDisabled);
    const history = useHistory();

    const validate = (name, value) => {
        yup
            .reach(loginSchema, name)
            .validate(value)
            .then((valid) => {
                setLoginErrors({
                    ...loginErrors,
                    [name]: "",
                });
            })
            .catch((error) => {
                setLoginErrors({
                    ...loginErrors,
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
        setLoginValues({
            ...loginValues,
            [name]: value,
        });
    };

    const login = (user) => {
        axios
            .post("https://potluck-planner-tt104.herokuapp.com/login", user)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(`Something went wrong: ${error}`));
    };

    const submit = () => {
        const user = {
            email: loginValues.email.trim(),
            password: loginValues.password.trim(),
        };
        login(user);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
        props.setSubmitted(true)
    };

    useEffect(() => {
        loginSchema.isValid(loginValues).then((valid) => {
            setDisabledLogin(!valid);
        });
    }, [loginValues]);

    return (
        <Login>
            <Link to="/" id="home">Home</Link>
            <Link to="/SignUp" id="signUp">Sign-Up</Link>
            <form onSubmit={onSubmit}>
                <div className="login-form">
                    <h1>Login</h1>

                    <div>
                        <div>{loginErrors.username}</div>
                        <div>{loginErrors.password}</div>
                    </div>

                    <div className="login-username">
                        <label>Username: </label>
                        <input
                            value={loginValues.username}
                            onChange={onInputChange}
                            name="username"
                            type="username"
                        />
                    </div>

                    <div className="login-password">
                        <label>Password:  </label>
                        <input
                            value={loginValues.password}
                            onChange={onInputChange}
                            name="password"
                            type="password"
                        />
                    </div>

                    <div className="loginBtn">
                        <button disabled={disabledLogin} id="submitBtn">Submit</button>
                    </div>

                    <div className="back-to-signUp">
                        <p>Forgot to Sign-Up?</p>
                    </div>

                    <div className="back-to-signUpBtn">
                        <button onClick={() => history.push("/SignUp")} id="signUpBtn">Sign-Up</button>
                    </div>

                </div>
            </form>
        </Login>
    );
};


export default LoginForm;
