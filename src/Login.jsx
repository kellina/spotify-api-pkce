import React from "react";
import goAuthorizationURI from './pkce-spotify';

function Login() {
  return (
    <div>
      <button onClick={goAuthorizationURI} className="btn btn-primary">
        Log in with Spotify
      </button>
    </div>
  );
}

export default Login;
