import React, { useState } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Guest from './Guest';
import LoginForm from './login/loginForm';
import SignUp from './signUp/SignUp';


const App = () => {
  const history = useHistory();
  const [submited, setSubmitted] = useState(false);

  return (
    <>
      <Switch>
        <div className='login-signUp'>
          <Route exact path="/loginForm" render={() => <LoginForm {...props} />} />

          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </div>

        <nav>
          <h1>Potluck Planner</h1>
          <div className="nav">
            <Link to="/" id="home"> Home </Link>
            <Link to="/Form" id="form"> Organizer </Link>
            <Link to="/Guest" id="guest"> Guest </Link>
          </div>
        </nav>

        <Route path="/">
          <button onClick={() => history.push("/Form")}> Create A Potluck </button>
        </Route>

        <Route exact path="/Guest">
          <h1> Upcoming Potluck's </h1>
          <Guest />
        </Route>

        <Route exact path="/Form">
          <Form />
        </Route>

      </Switch>
    </>
  );
};

export default App;

