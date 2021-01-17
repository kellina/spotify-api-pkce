// create the code verifier and challenge
import pkceChallenge from 'pkce-challenge'
import querystring from 'querystring'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import env from 'react-dotenv'

// construct the authorization URI

const STATE_KEY = 'spotify_auth_state'
const CODE_VERIFIER_KEY = 'spotify_code_verifier'
const ACCESS_TOKEN_KEY = 'spotify_access_token'
const ACCESS_TOKEN_EXPIRES_KEY = 'spotify_access_token_expires_in'
const ACCESS_TOKEN_REFRESH_KEY = 'spotify_access_token_refresh'
const SCOPE = 'user-read-private user-read-email playlist-read-private playlist-modify-private'
const CLIENT_ID = env.CLIENT_ID
const REDIRECT_URI = env.REDIRECT_URI
const CODE_CHALLENGE_METHOD = 'S256'


function createAuthorizationURI() {
    const { code_challenge, code_verifier } = pkceChallenge()
    const state = uuid()
    localStorage.setItem(CODE_VERIFIER_KEY, code_verifier)
    localStorage.setItem(STATE_KEY, state)

    return 'https://accounts.spotify.com/authorize?' + querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        code_challenge_method: CODE_CHALLENGE_METHOD,
        code_challenge,
        scope: SCOPE,
        state: state
    })
}


// go to authorization URI
function goAuthorizationURI() {
    window.location.href = createAuthorizationURI()
}


async function generateToken(state, code) {
    const savedState = localStorage.getItem(STATE_KEY)
    localStorage.removeItem(STATE_KEY)
    if (state !== savedState) {
        return { error: true }
    }
    const postConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    };
    const parameters = {
        client_id: CLIENT_ID,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        code_verifier: localStorage.getItem(CODE_VERIFIER_KEY)
    }

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            querystring.stringify(parameters), postConfig
        )
        return response.data;
    } catch (err) {
        return { error: true }
    }
}

function saveToken(tokenData) {
    const { access_token, expires_in, refresh_token } = tokenData;
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token)
    localStorage.setItem(ACCESS_TOKEN_EXPIRES_KEY, Math.floor(Date.now() / 1000) + expires_in)
    localStorage.setItem(ACCESS_TOKEN_REFRESH_KEY, refresh_token)
}

function getToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export default goAuthorizationURI
export { generateToken, saveToken, getToken }