import React from 'react';
import './App.css';

export default function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props;


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
                        value={values.name}
                    />
                </label>

                <div className="potluck-form-date" />
                <label>
                    Date:&nbsp;
                    <input
                        name="date"
                        type="text"
                        onChange={onInputChange}
                        value={values.name}
                    />
                </label>

                <div className="potluck-form-time" />
                <label>
                    Time:&nbsp;
                    <input
                        name="time"
                        type="text"
                        onChange={onInputChange}
                        checked={values.name}
                    />
                </label>

                <div className="potluck-form-location" />
                <label>
                    Location:&nbsp;
                    <input
                        name="location"
                        type="text"
                        onChange={onInputChange}
                        checked={values.name}
                    />
                </label>

                <div className="potluck-form-foodList" />
                <label>
                    Menu:&nbsp;
                    <input
                        name="foodList"
                        type="text"
                        onChange={onInputChange}
                        checked={values.name}
                    />
                </label>

                <div className="potluck-form-isGoing-yes" />
                <label>
                    Yes:&nbsp;
                    <input
                        name="isGoing"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.name}
                    />
                </label>

                <div className="pizza-form-isGoing-no" />
                <label>
                    No:&nbsp;
                    <input
                        name="isGoing"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.name}
                    />
                </label>

                <div className="potluck-form-numberOfGuests" />
                <label>
                    Number of Guests:&nbsp;
                    <input
                        name="numberOfGuests"
                        type="text"
                        onChange={onInputChange}
                        checked={values.name}
                    />
                </label>

                <div className="submit-button" />
                <button disabled={disabled}>Submit</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.date}</div>
                    <div>{errors.time}</div>
                    <div>{errors.location}</div>
                    <div>{errors.foodList}</div>
                    <div>{errors.isGoing}</div>
                    <div>{errors.numberOfGuests}</div>
                </div>
            </form>
        </div>
    );
};