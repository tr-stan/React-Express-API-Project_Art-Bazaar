import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// this component renders the details page of one specific artist
class PieceDetails extends Component {
	state = {
		art: []
	}

	getArt = async () => {
		try {
			const art = await fetch(`http://localhost:9000/products/${this.props.match.params.artistId}/${this.props.match.params.id}`)
			const artJson = await art.json()
			this.setState({art: artJson})
			console.log(artJson)
			return artJson
		}
		catch (err) {
	        console.log(err, 'error in catch block')
	        return err
	    }
	}

	componentDidMount() {
	    this.getArt().then((data) => console.log(data, ' Art Piece from API'))
	}

	render() {
		let type = 'Original'
		if(this.state.art.is_print) {
			type = 'Print'
		}
		return(
			<section>
				<h1>{this.state.art.name}</h1>
				<p>{this.state.art.price} -- {type}</p>
				<p>{this.state.art.description}</p>
				<button><Link to={{pathname:`/artists/${this.state.art.id}/${this.state.art.first_name}-${this.state.art.last_name}/art`}}>Back to artist</Link></button>
			</section>
		)
	}
}

export default PieceDetails