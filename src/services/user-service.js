import axios from 'axios'
import { getToken } from '../pkce-spotify'


export async function getCurrentUserProfile() {
    const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })

    console.log(response.data)
    return response.data
}