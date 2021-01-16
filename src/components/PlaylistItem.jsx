import React from 'react'

function PlaylistItem(props) {
    const {playlist } = props

    return (
        <div>
            <p>Name:  {playlist.name} </p>
            <img src={playlist.images[0].url} alt={playlist.name} />
            <p>Owner: <a href={playlist.owner.external_urls.spotify}>{playlist.owner.display_name}</a> </p>
          
        </div>
    )
}

export default PlaylistItem
