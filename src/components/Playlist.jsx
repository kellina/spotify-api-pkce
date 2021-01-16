import React, { useState, useEffect } from 'react'
import { getMyPlaylist } from '../services/user-service'
import PlaylistItem from './PlaylistItem'

const initialState = {items:[]} 
function MyPlaylist() {

    const [playlists, setPlaylists] = useState(initialState)

    useEffect(() => {
        getMyPlaylist().then((myPlaylists) => {
            setPlaylists(myPlaylists)
        })
    }, [])

    //Incluir um input com limite e offset

    return (
        <div>
            <h1> My Playlists</h1>

            {playlists.items.map((playlist) => <PlaylistItem key={playlist.id} playlist={ playlist} />)}


            <p>Total: {playlists.total}</p>
        </div>
    )
}

export default MyPlaylist


