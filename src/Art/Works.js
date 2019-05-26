import React, { Component } from 'react'
import Art from './Art'

// this component displays the list of pieces of art created in ./Art
class Works extends Component {
	state = {
		works: []
	}

	getWorks = async () => {
		let fetchURL = (process.env.NODE_ENV !== 'production') ? `http://localhost:9000/products/${this.props.match.params.artistId}` : `https://art-bazaar-react.herokuapp.com/products/${this.props.match.params.artistId}`
		try {
			const works = await fetch(fetchURL)
			const worksJson = await works.json()
			this.setState({works: worksJson})
			return worksJson
		}
		catch (err) {
	        console.log(err, 'error in catch block')
	        return err
	    }
	}

	componentDidMount() {
	    this.getWorks().then((data) => console.log(data, ' Works from API'))
	}

	render() {
		return (
			<Art works={this.state.works} />
		)
	}
}

export default Works