import React, { Component } from 'react'
import Event from './Event'
class Upcoming extends Component {
    state = {
        events: []
    }

    getEvents = async () => {
        let fetchURL = (process.env.NODE_ENV !== 'production') ? `http://localhost:9000/events` : `https://art-bazaar-react.herokuapp.com/events`
        try {
            const events = await fetch(fetchURL)
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
            <div>
			<Event events={this.state.events} />
			</div>
        )
    }
}

export default Upcoming