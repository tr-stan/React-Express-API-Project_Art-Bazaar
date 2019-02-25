import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import APIKEY from '../API'

const Marker = ({ image }) => <div><img className="placemarker" alt="event location marker" src={image}/></div>;

class MapContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('props', this.props)
        const markerList = <Marker
        					lat={this.props.event.latitude}
        					lng={this.props.event.longitude}          				
                  			image={"https://i.imgur.com/X3jej8c.png"}
                			/>
        return (
            // Important! Always set the container height explicitly
            <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {markerList}
        </GoogleMapReact>
      </div>
        );
    }
}

export default MapContainer