import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema';
import './App.css';

export default function Form() {
    const initialFormValues = {
        eventName: '',
        date: '',
        time: '',
        location: '',
        foodList: '',
    };

    const initialFormErrors = {
        eventName: '',
        date: '',
        time: '',
        location: '',
        foodList: '',
    }

    const initialDisabled = true;


    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [currentPotluck, setCurrentPotluck] = useState([]);
    const [menu, setMenu] = useState();

    const postPotluck = (potluck) => {
        axios
            .post(`https://reqres.in/api/users`, potluck)
            .then((response) => {
                setCurrentPotluck([response.data, ...currentPotluck]);
                console.log(response)
            })
            .catch((error) => {
                debugger
                console.log(error);
            })
    };

    const onInputChange = (event) => {
        const { name } = event.target;
        const { value } = event.target;

        yup
            .reach(formSchema, name)
            .validate(value)
            .then((valid) => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                });
            })
            .catch((error) => {
                setFormErrors({
                    ...formErrors,
                    [name]: error.errors,
                });
            });

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const potluck = {
            eventName: formValues.eventName,
            date: formValues.date,
            time: formValues.time,
            location: formValues.location,
            foodlist: formValues.foodList,
        };
        postPotluck(potluck);
    };

    const addNewFood = (food) => {
        const newFood = {
            id: Date.now(),
            title: food.foodList,
        };
        setMenu([newFood, ...menu]);
    };

    useEffect(() => {
        formSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);


    return (
        <div className="Form">
            <h2>Create your Potluck</h2>
            <div className="potluck-form" />
            <form onSubmit={onSubmit}>

                <div className="potluck-form-name" />
                <label>
                    Event Name:&nbsp;
                <input
                        name="eventName"
                        type="text"
                        onChange={onInputChange}
                        value={formValues.name}
                    />
                </label>

                <div className="potluck-form-date" />
                <label>
                    Date:&nbsp;
                    <input
                        name="date"
                        type="text"
                        onChange={onInputChange}
                        value={formValues.name}
                    />
                </label>

                <div className="potluck-form-time" />
                <label>
                    Time:&nbsp;
                    <input
                        name="time"
                        type="text"
                        onChange={onInputChange}
                        checked={formValues.name}
                    />
                </label>

                <div className="potluck-form-location" />
                <label>
                    Location:&nbsp;
                    <input
                        name="location"
                        type="text"
                        onChange={onInputChange}
                        checked={formValues.name}
                    />
                </label>

                <div className="potluck-form-foodList" />
                <label>
                    Menu:&nbsp;
                    <input
                        name="foodList"
                        type="text"
                        onChange={onInputChange}
                        checked={formValues.name}
                    />
                    <button onclick={() => addNewFood = { addNewFood }}>Add Menu Item</button>
                </label>

                <div className="submit-button" />
                <button disabled={disabled}>Submit</button>
                <div className="errors">
                    <div>{formErrors.name}</div>
                    <div>{formErrors.date}</div>
                    <div>{formErrors.time}</div>
                    <div>{formErrors.location}</div>
                    <div>{formErrors.foodList}</div>
                </div>
            </form>
            {currentPotluck.map((potluck, index) => {
                return <div key={index} >
                    <h2>{potluck.eventName}</h2>
                    <p>{potluck.date}</p>
                    <p>{potluck.time}</p>
                    <p>{potluck.location}</p>
                    <p>{potluck.foodList}</p>
                </div>
            })}
        </div>
    );
};
