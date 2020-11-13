import React from 'react';
import './App.css';

export default function Guest(props) {
    if (!props) {
        return <h3>Working on retriving your Potluck details...</h3>;
    }

    const { eventName, date, location, foodList, isGoing, numberOfGuests } = props.potluck;

    let attending = Object.keys(isGoing);
    let isAttending = attending.filter(function (picked) {
        return isGoing[picked];
    });

    return (
        <div className="pizzaOrder">
            <h2>Your Potluck:</h2>
            <h3>Event Name: {eventName}</h3>
            <h3>Date: {date}</h3>
            <h3>Location: {location}</h3>
            <h3>Menu: {foodList}</h3>
            <h3>Attending: {isGoing}</h3>
            <h3>Guests: {numberOfGuests}</h3>
            <ul>
                Pizza Toppings:
          {isAttending.map((isGoing, index) => {
                return <li key={index}>-{isGoing}</li>;
            })}
            </ul>
            <h3>Can't wait to see you soon!</h3>
        </div>
    );
}