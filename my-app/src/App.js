import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import './App.css';
import Form from './Form';


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
        </div>
      </nav>

      <Route path="/" component={App}>
        <button onClick={() => history.push("/Form")}> Create A Potluck </button>
      </Route>

      <Switch>
        <Route path="/Guest">
          <h1> Upcoming Potluck's </h1>
        </Route>

        <Route path="/Form">
          <Form />
        </Route>

        <Route path="/Guest">
        </Route>

      </Switch>
    </>
  );
};

export default App;
