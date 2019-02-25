import React, { Component } from 'react'
import Event from './Event'
class Upcoming extends Component {
    state = {
        events: []
    }

    getEvents = async () => {
        try {
            const events = await fetch('http://localhost:9000/events')
            const eventsJson = await events.json()
            this.setState({ events: eventsJson })
            return eventsJson
        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }
    }

    componentDidMount() {
        this.getEvents().then((data) => console.log(data, ' Upcoming Events Data from API'))
    }

    render() {
        return (
            <div className='main'>
			<Event events={this.state.events} />
			</div>
        )
    }
}

export default Upcoming