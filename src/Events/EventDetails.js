import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer'

class EventDetails extends Component {
	state = {
        event: [],
		zoom: 12,
        center: {
            lat: 30.2682,
            lng: -97.74295
		}
	}

	getEvent = async () => {
        try {
            const event = await fetch(`http://localhost:9000/events/${this.props.match.params.id}`)
            const eventJson = await event.json()
            this.setState({
                event: eventJson
            })
            console.log('heeey ', eventJson, 'hooo')
            console.log('this.state.event: ', this.state.event)
            return eventJson
        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }
    }

    componentDidMount() {
        this.getEvent().then((data) => console.log(data, ' Upcoming Event Data from API'))
    }


render() {
	return(
		<section className='main'>
            <h1>{this.state.event.name}</h1>
            <div className='feature'>
                <p>{this.state.event.to_char}</p>
                <img className='profile-img' src={this.state.event.event_img} alt='pop-up market scene'/>
                <p>{this.state.event.description}</p>
                <button><Link to={{pathname:`/events/upcoming`}}>Back to Upcoming Events</Link></button>
            </div>
            <MapContainer
            event={this.state.event}
            zoom={this.state.zoom}
            center={this.state.center}
            />
		</section>
	)
}
}

export default EventDetails