import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import guestSchema from './guestSchema';

export default function Guest() {
    const initialFormValues = {
        guestName: '',
        isGoing: '',
        numberOfGuests: '',
        foodList: false,
    };

    const initialFormErrors = {
        guestName: '',
        isGoing: '',
        numberOfGuests: '',
        foodList: false,
    }

    const initialDisabled = true;


    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [currentPotluck, setCurrentPotluck] = useState([]);

    const postPotluck = (potluck) => {
        axios
            .get(`https://potluck-planner-tt104.herokuapp.com/potluck-guests/:id`, potluck)
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
            .reach(guestSchema, name)
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

    const onCheckboxChange = (event) => {
        const { name } = event.target;
        const { checked } = event.target;

        setFormValues({
            ...formValues,
            isGoing: {
                ...formValues.isGoing,
                [name]: checked,
            },
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const potluck = {
            guestName: formValues.guestName,
            isGoing: formValues.isGoing,
            numberOfGuests: formValues.numberOfGuests,
        };
        postPotluck(potluck);
    };

    useEffect(() => {
        guestSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);


    return (
        <>
            <div className="guest-page">
                <form onSubmit={onSubmit}>

                    <div className="potluck-form-your-name" />
                    <label>
                        Your Name:&nbsp;
                    <input
                            name="guestName"
                            type="text"
                            onChange={onInputChange}
                            checked={formValues.guestName}
                        />
                    </label>

                    <h3>Will you be Attending</h3>
                    <div className="potluck-form-isGoing-yes" />
                    <label>
                        Yes:&nbsp;
                <input
                            name="isGoing"
                            type="radio"
                            value="yes"
                            checked={true}
                            className="form-check-input"
                        />
                    </label>

                    <div className="potluck-form-isGoing-no" />
                    <label>
                        No:&nbsp;
                <input
                            name="isGoing"
                            type="radio"
                            value="no"
                            checked={true}
                            className="form-check-input"
                        />
                    </label>

                    <div className="potluck-form-numberOfGuests" />
                    <label>
                        Total Guests:&nbsp;
                <select name="numberOfGuests" value={formValues.numberOfGuests} onChange={onInputChange}>
                            <option value="">Select Guests</option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                            <option value="six">6</option>
                        </select>
                    </label>

                    <div className="potluck-form-menu-checkbox" />
                    <label className="menu-checkbox">
                        Select an item to bring:&nbsp;
                    <input
                            type="checkbox"
                            name="foodList"
                            checked={formValues.foodList}
                            onChange={onCheckboxChange}
                        />
                        {formValues.foodList && formValues.foodList.map(foodList => (
                            <div key={foodList} className="food-list">
                                {foodList}
                            </div>
                        ))}
                    </label>

                    <div className="guest-submit-button" />
                    <button disabled={disabled}>Submit</button>
                    <div className="errors">
                        <div>{formErrors.guestName}</div>
                        <div>{formErrors.isGoing}</div>
                        <div>{formErrors.numberOfGuests}</div>
                    </div>
                </form>
            </div>
        </>
    )
}
