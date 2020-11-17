import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Guest from './Guest';
import LoginForm from './login/loginForm';
import SignUp from './signUp/SignUp';


const App = () => {
  const history = useHistory();

  return (
    <>
      <nav>
        <h1>Potluck Planner</h1>
        <div className="nav">
          <Link to="/" id="home"> Home </Link>
          <Link to="/Form" id="form"> Organizer </Link>
          <Link to="/Guest" id="guest"> Guest </Link>
          <Link to="/loginForm" id="loginForm"> Login </Link>
          <Link to="/SignUp" id="SignUp"> Sign Up </Link>
        </div>
      </nav>

      {/* <Route>
        <button onClick={() => history.push("/Form")}> Create A Potluck </button>
      </Route> */}

      <Route path="/loginForm">
        <LoginForm />
      </Route>

      <Route path="/SignUp">
        <SignUp />
      </Route>

      <Switch>
        <Route path="/Guest">
          <h1> Upcoming Potluck's </h1>
          <Guest />
        </Route>

        <Route path="/Form">
          <Form />
        </Route>

      </Switch>
    </>
  );
};

export default App;

