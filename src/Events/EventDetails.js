import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer'

class EventDetails extends Component {
	state = {
		eventt: [],
		zoom: 0,
        center: {
            lat: 30.2682,
            lng: -97.74295
		}
	}

	getEvent = async () => {
        try {
            const event = await fetch(`http://localhost:9000/events/${this.props.match.params.id}`)
            const eventJson = await event.json()
            this.setState({ eventt: eventJson })
            console.log('heeey ', eventJson, 'hooo')
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
    console.log("Event Details this.state.event: ", this.state.eventt, "asdfasd")
	return(
		<section className='main'>
            <h1>{this.state.eventt.name}</h1>
            <div className='card'>
                <img className='profile-img' src={this.state.eventt.event_img} alt='pop-up market scene'/>
                <p>{this.state.eventt.description}</p>
                <button><Link to={{pathname:`/events/upcoming`}}>Back to Upcoming Events</Link></button>
            </div>
            <MapContainer
            eventt={this.state.eventt}
            zoom={this.state.zoom}
            center={this.state.center}
            />
		</section>
	)
}
}

export default EventDetails