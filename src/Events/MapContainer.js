import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import APIKEY from '../API'

const Marker = ({ image }) => <div><img className="profile-img" alt="event location marker" src={image}/></div>;

class MapContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
			console.log(this.props)
          const markerList = <Marker
                  			image={"https://i.imgur.com/dqYF1Ax.png"}
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