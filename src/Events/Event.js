import React from 'react'
import { Link } from 'react-router-dom'

// this component creates the list of artists
const Event = (props) => {
    const eventList = props.events.map((event, index) => {
        return 	<li className='card' key={index}>
                    <img className='small-img' src={event.event_img} alt='pop-up market scene'/>
					<p>{event.name}</p>
					<button><Link to={{pathname:`/events/upcoming/${event.id}`, state: {event: event} }}>Learn More</Link></button>
				</li>
    })
    return (
        <section className='main'>
        <h1>Upcoming Events</h1>
        <ul>
           {eventList}
        </ul>
        </section>
    )
}

export default Event