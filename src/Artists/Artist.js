import React from 'react'
import { Link } from 'react-router-dom'

// this component creates the list of artists
const Artist = (props) => {
    const artistList = props.artists.map((artist, index) => {
        return 	<li className='card' key={index}>
                    <img className='small-img' src={artist.img_url} alt='default small artist'/>
					<p>{`${artist.first_name} ${artist.last_name}`}</p>
					<button><Link to={{pathname:`/artists/${artist.id}/${artist.first_name}-${artist.last_name}`, state: {artist: artist} }}>Learn More</Link></button>
				</li>
    })
    return (
        <section className='main'>
        <h1>Current Artists</h1>
        <ul>
           {artistList}
        </ul>
        </section>
    )
}

export default Artist