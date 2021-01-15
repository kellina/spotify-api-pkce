import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Callback from "./Callback";
import "./App.css";
import Login from "./Login";
import UserProfile from './UserProfile'
import Home from "./Home";
import Hearder from "./Hearder";


function App() {
  return (
    <Router>

      <Hearder />

      <div className="content">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/user_profile" component={UserProfile} />
          <Route path="/login" component={Login} />
          <Route path="/callback" component={Callback} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
