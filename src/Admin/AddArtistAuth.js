import React, { Component } from 'react'
import AddArtist from './AddArtist'
import Auth from './Auth'

class AddArtistAuth extends Component {

	render() {
		return(
			<div className='main'>
            	{this.props.location.state ? <AddArtist /> : <Auth />}
         	</div>
        )
	}
}

export default AddArtistAuth