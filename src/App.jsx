import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Callback from "./Callback";
import "./App.css";
import Login from "./Login";


function App() {
  return (
    <Router>
      <div className="App-div">
        <h1>WELCOME TO KELIFY</h1>
        <h2>Your music platform</h2>
        

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/callback" component={Callback} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
