import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Callback from "./Callback";
import "./App.css";
import Login from "./Login";
import UserProfile from './UserProfile'
import Home from "./Home";


function App() {
  return (
    <Router>
      <div className="App-div">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/user_profile">User Profile</Link>
            </li>
            <li>
              <Link to="/user_profile">Playlist</Link>
            </li>
          </ul>
        </nav>
               

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
