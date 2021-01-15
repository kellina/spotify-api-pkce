import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Hearder() {
    return (
        <div className="menu">
          <nav className="nav-link">
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
        </div>
    )
}

export default Hearder
