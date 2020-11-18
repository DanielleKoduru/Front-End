import React from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import Guest from "./Guest";
import LoginForm from "./login/loginForm";
import SignUp from "./signUp/SignUp";
import { connect } from "react-redux";
import { AddUser } from "./actions/userActions";

const App = (props) => {
  console.log("App.js props:", props);
  const history = useHistory();

  return (
    <>
      {/* This is currently commented out so I can work on my home, guest, and organizer page. since the login and signup is password protected and not connected */}
      <Switch>
        <div className="login-signUp">
          <Route path="/loginForm">
            <LoginForm />
          </Route>

          <Route path="/SignUp">
            <SignUp />
          </Route>
        </div>

        <nav>
          <h1>Potluck Planner</h1>
          <div className="nav">
            <Link to="/" id="home">
              {" "}
              Home{" "}
            </Link>
            <Link to="/Form" id="form">
              {" "}
              Organizer{" "}
            </Link>
            <Link to="/Guest" id="guest">
              {" "}
              Guest{" "}
            </Link>
          </div>
        </nav>

        <Route path="/">
          <button onClick={() => history.push("/Form")}>
            {" "}
            Create A Potluck{" "}
          </button>
        </Route>

        {/* comment out this switch when app is fully working */}
        {/* <Switch> */}
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

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  SignUp: (newUser) => dispatch(AddUser(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
