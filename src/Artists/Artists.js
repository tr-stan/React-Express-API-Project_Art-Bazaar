import React, { Component } from 'react'
import Artist from './Artist'

// this component displays the list of artists created in ./'Artist
class Artists extends Component {
	state = {
		artists: []
	}

	getArtists = async () => {
		let fetchURL = (process.env.NODE_ENV !== 'production') ? `http://localhost:9000/users` : `https://art-bazaar-react.herokuapp.com/users`
		try {
			const artists = await fetch(fetchURL)
			const artistsJson = await artists.json()
			this.setState({artists: artistsJson})
			return artistsJson
		}
		catch (err) {
	        console.log(err, 'error in catch block')
	        return err
	    }
	}

	componentDidMount() {
	    this.getArtists().then((data) => console.log(data, ' User Data from API'))
	}

	render() {
		return (
			<Artist artists={this.state.artists} />
		)
	}
}

export default Artists