import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {


	render() {
		return(
			<div>
				<h1>Hello World, from Home Page!</h1>
				<button><Link to={{pathname:`/artists`}}>See Our Current Artists</Link></button>
			</div>
		)
	}
}
export default Home