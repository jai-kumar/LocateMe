import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
};

var LatLang = {};

class GMap extends Component {
	componentDidMount() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				LatLang = {
					lat: position.coords.latitude, lng: position.coords.longitude
				};
			});
		} else {
			console.log('navigator geolocation is not supported!');
		}
	}
	
  	render() {
    	return (
      		<Map
        		google={this.props.google}
        		zoom={15}
        		style={mapStyles}
	        	initialCenter={LatLang}
	      	>
	      		<Marker
    				title={"You're here."}
    				name={'MarkerName'}
    				position={LatLang} />

				<InfoWindow visible={true}>
		            <div>
		              <h1>You're here.</h1>
		            </div>
		        </InfoWindow>
        	</Map>
		);
  	}
}

export default GoogleApiWrapper({  apiKey: 'AIzaSyBnf4tHBBzEwCXkcna989IZ5lfRS0mlcMo' })(GMap);