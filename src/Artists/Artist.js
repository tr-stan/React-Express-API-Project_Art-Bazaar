import React from 'react'
import { Link } from 'react-router-dom'

// this component creates the list of artists
const Artist = (props) => {
    const artistList = props.artists.map((artist, index) => {
        return 	<div key={index}>
					<p>{`${artist.first_name} ${artist.last_name}`}</p>
					<button><Link to={{pathname:`/artists/${artist.id}/${artist.first_name}-${artist.last_name}`, state: {artist: artist} }}>Learn More</Link></button>
				</div>
    })
    return (
        <div>
           {artistList}
        </div>
    )
}

export default Artist