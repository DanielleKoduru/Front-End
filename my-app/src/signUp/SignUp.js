import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import signUpSchema from './signUpSchema';
import { SignUpPage } from '../styled-components';


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

const initialUsers = [];
const initialDisabled = true;

const SignUp = () => {

    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
    const [signUpErrors, setSignUpErrors] = useState(initialSignUpErrors);
    const [disabledLogin, setDisabledLogin] = useState(initialDisabled);
    const [users, setUsers] = useState(initialUsers);
    const history = useHistory();

    const postNewUsers = (newUser) => {
        axios
            .post(`https://potluck-planner-tt104.herokuapp.com/signup`, newUser)
            .then((response) => {
                setUsers([...users, response.data]);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const submit = () => {
        const newUser = {
            username: signUpValues.username.trim(),
            email: signUpValues.email.trim(),
            password: signUpValues.password.trim(),
        };
        postNewUsers(newUser);
    };

    useEffect(() => {
        signUpSchema.isValid(signUpValues).then((valid) => {
            setDisabledLogin(!valid);
        });
    }, [signUpValues]);

    return (
        <SignUpPage>
            <Link to="/" id="home">Home</Link>
            <Link to="/loginForm" id="loginForm">Login</Link>
            <form onSubmit={onSubmit}>
                <div className="sign-up-form">
                    <h1>Sign Up</h1>

                    <div>
                        <div>{signUpErrors.username}</div>
                        <div>{signUpErrors.email}</div>
                        <div>{signUpErrors.password}</div>
                    </div>
                    <div className="signUp-username">
                        <label>Username: </label>
                        <input
                            value={signUpValues.username}
                            onChange={onInputChange}
                            name="username"
                            type="username"
                        />
                    </div>

                    <div className="signUp-email">
                        <label>Email: </label>
                        <input
                            value={signUpValues.email}
                            onChange={onInputChange}
                            name="email"
                            type="email"
                        />
                    </div>

                    <div className="signUp-password">
                        <label>Password: </label>
                        <input
                            value={signUpValues.password}
                            onChange={onInputChange}
                            name="password"
                            type="password"
                        />
                    </div>
                    <div className="signUpBtn">
                        <button disabled={disabledLogin} id="submitBtn">Submit</button>
                    </div>

                    <div className="back-to-login">
                        <p>Already signed up?</p>
                    </div>

                    <div className="back-to-loginBtn">
                        <button onClick={() => history.push("/loginForm")} id="backLoginBtn">Login</button>
                    </div>
                </div>
            </form>
        </SignUpPage>
    );
};


export default SignUp;
