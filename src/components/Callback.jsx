import React from "react";
import { useHistory } from "react-router-dom";
import {generateToken, saveToken} from '../pkce-spotify'

function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.href.split("?")[1];
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}


function Callback() {
  const { error, code, state } = getHashParams();
  const history = useHistory()

  let msg = null
  if (error) {
    msg = 'There was an error during the authentication'
  }

  generateToken(state, code).then(tokenData => {
    if(tokenData.error){
      msg = 'Access token retrive error'
    }
    else {
      saveToken(tokenData)
      history.push('/')
    }
  })

  return (
    <div>
      {msg}
    </div>
  );
}

export default Callback;
