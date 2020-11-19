import React, { useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import Guest from "./Guest";
import LoginForm from "./login/loginForm";
import SignUp from "./signUp/SignUp";
import { connect } from "react-redux";
import { AddUser } from "./actions/userActions";
import { Nav } from './styled-components';
import { WholeApp } from './styled-components';



const App = (props) => {
  console.log("App.js props:", props);
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);

  return (
    <WholeApp>
      <>
        {/* <Switch> */}
        <div>
          {/* <Route exact path="/loginForm" render={() => <LoginForm {...props} setSubmitted={setSubmitted} />} {props.submitted ? '/' : '/loginForm'} />

        <Route exact path="/SignUp">
          <SignUp {props.submitted ? '/' : '/SignUp'} />
        </Route> */}
        </div>

        <Nav>
          <nav>
            <div className="header">
              <h1>Potluck Planner</h1>
            </div>
            <div className="nav-user">
              <Link to="/" id="home">{" "}Home{" "}</Link>
              <Link to="/Form" id="form">{" "}Organizer{" "}</Link>
              <Link to="/Guest" id="guest">{" "}Guest{" "}</Link>
            </div>
          </nav>
        </Nav>

        <Route path="/">
          <button onClick={() => history.push("/Form")}>{" "}Create A Potluck{" "}</button>
        </Route>

        <Route exact path="/Guest">
          <h1> Upcoming Potluck's </h1>
          <Guest />
        </Route>

        <Route exact path="/Form">
          <Form />
        </Route>
        {/* </Switch> */}
      </>
    </WholeApp>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  SignUp: (newUser) => dispatch(AddUser(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
