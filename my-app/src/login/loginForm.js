import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import loginSchema from './loginSchema';

const initialLoginValues = {
    username: '',
    password: '',
};

const initialLoginErrors = {
    username: '',
    password: '',
}

const initialUsers = []
const initialDisabled = true


const LoginForm = () => {
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
    const [disabledLogin, setDisabledLogin] = useState(initialDisabled);
    const [users, setUsers] = useState(initialUsers);

    const postNewUsers = (newUser) => {
        axios
            .post(`https://potluck-planner-tt104.herokuapp.com/login`, newUser)
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
            .reach(loginSchema, name)
            .validate(value)
            .then((valid) => {
                setLoginErrors({
                    ...loginErrors,
                    [name]: '',
                });
            })
            .catch((error) => {
                setLoginErrors({
                    ...loginErrors,
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
        setLoginValues({
            ...loginValues,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const submit = () => {
        const newUser = {
            username: loginValues.username.trim(),
            password: loginValues.password.trim()
        }
        postNewUsers(newUser)
    }


    useEffect(() => {
        loginSchema.isValid(loginValues)
            .then(valid => {
                setDisabledLogin(!valid)
            })
    }, [loginValues])



    return (
        <form onSubmit={onSubmit}>
            <h1>Login</h1>

            <div>
                <div>{loginErrors.username}</div>
                <div>{loginErrors.password}</div>
            </div>

            <div className='login-username'>
                <label>Username:  </label>
                <input
                    value={loginValues.username}
                    onInputChange={onInputChange}
                    name='username'
                    type='username'
                />
            </div>

            <div className='login-password'>
                <label>Password:  </label>
                <input
                    value={loginValues.password}
                    onInputChange={onInputChange}
                    name='password'
                    type='password'
                />
            </div>

            <button disabledLogin={disabledLogin} id='submitBtn'>Submit</button>
        </form>
    )
}

export default LoginForm;


