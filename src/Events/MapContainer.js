import React from 'react'
import GoogleMapReact from 'google-map-react'
import APIKEY from '../API'

const Marker = ({ image }) => <div><img className="placemarker" alt="event location marker" src={image}/></div>;

const MapContainer = (props) => {
        console.log('props', props)
        const markerList = <Marker
        					lat={props.event.latitude}
        					lng={props.event.longitude}          				
                  			image={"https://i.imgur.com/X3jej8c.png"}
                			/>
        return (
            // Important! Always set the container height explicitly
            <div className="map">
        		<GoogleMapReact
		          bootstrapURLKeys={{ key: APIKEY }}
		          defaultCenter={props.center}
		          defaultZoom={props.zoom}
		        >
	        	{markerList}
	        	</GoogleMapReact>
      		</div>
        )
}

export default MapContainer