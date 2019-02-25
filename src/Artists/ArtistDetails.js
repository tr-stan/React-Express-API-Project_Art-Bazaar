import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// this component renders the details page of one specific artist
class ArtistDetails extends Component {

	state = {
		artist: []
	}

	getArtist = async () => {
		try {
			const artist = await fetch(`http://localhost:9000/users/${this.props.match.params.artistId}`)
			const artistJson = await artist.json()
			this.setState({artist: artistJson})
			return artistJson
		}
		catch (err) {
	        console.log(err, 'error in catch block')
	        return err
	    }
	}

	componentDidMount() {
	    this.getArtist().then((data) => console.log(data, ' Artist from API'))
	}

	render() {
		return(
			<section className='main'>
				<div className='card'>
					<img className='profile-img' src={this.state.artist.img_url} alt='default profile'/>
					<h1>{this.state.artist.first_name} {this.state.artist.last_name}</h1>
					<p>{this.state.artist.bio}</p>
					<button><Link to={{pathname:`/artists/${this.state.artist.id}/${this.state.artist.first_name}-${this.state.artist.last_name}/art`}}>See their work</Link></button>
				</div>
			</section>
		)
	}
}

export default ArtistDetails