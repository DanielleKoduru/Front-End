import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Guest from './Guest';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema';

const initialFormValues = {
  date: '',
  time: '',
  location: '',
  foodList: '',
  isGoing: false,
  numberOfGuests: '',
};

const initialFormErrors = {
  date: '',
  time: '',
  location: '',
}

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [currentPotluck, setCurrentPotluck] = useState([]);

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
      date: formValues.date.trim(),
      time: formValues.time.trim(),
      location: formValues.location.trim(),
      foodlist: formValues.foodList.trim(),
      isGoing: formValues.isGoing,
      numberOfGuests: formValues.guests.trim(),
    };
    postPotluck(potluck);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


  return (
    <nav>
      <h1>Potluck Planner</h1>
      <div className="nav">
        <Link to="/" id="home"> Home </Link>
        <Link to="/Guest" id="guest page"> My Potluck's </Link>
      </div>
    </nav>

    <Switch>
      <Route path="/Guest">
        <h1> Upcoming Potluck's </h1>
      </Route>
    </>


    <Route path="/Form">
      <h1>Create A New Potluck</h1>
      <Form
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        onCheckboxChange={onCheckboxChange}
        disabled={disabled}
        errors={formErrors}
        values={formValues}
      />
      {currentPotluck.map((potluck, index) => {
        return <div key={index} >
          <h2>{potluck.date}</h2>
          <p>{potluck.time}</p>
          <p>{potluck.location}</p>
          <p>{potluck.numberOfGuests}</p>
        </div>
      })}
    </Route>
    <Route path="/Form">
    </Route>
  );
};

export default App;
