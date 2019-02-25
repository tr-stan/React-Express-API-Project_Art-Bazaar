import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

	render() {
		return(
			<section className='main'>
				<h1>Art Bazaar</h1>
				<div className='feature'>
					<img className='profile-img' src='https://i.imgur.com/EXlahSJ.jpg' alt='outdoor pop-up market' />
					<button><Link to='/events/upcoming'>See Our Upcoming Events</Link></button>
				</div>
				<button id="login"><Link to="/login">Admin Login</Link></button>
			</section>
		)
	}
}
export default Home