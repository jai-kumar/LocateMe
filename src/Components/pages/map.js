import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader'

class Map extends Component {
	/*constructor(props){
    	super(props);
    	this.map = null;    
  	}

  	componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
 		if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
     		if (isScriptLoadSucceed) {
        		this.map = new window.google.maps.Map(this.refs.map, {
          			center: {lat: 10.794234, lng: 106.706541},
          			zoom: 20
        		});

	        	if (navigator.geolocation) {
	          		navigator.geolocation.getCurrentPosition((position) => {
	            		const pos = {
	              			lat: position.coords.latitude,
	              			lng: position.coords.longitude
	            		};

	            		this.map.setCenter(pos);

	            		const marker = new window.google.maps.Marker({
		              		position: pos,
		              		map: this.map,
		              		title: "Found Ya! You're here."
	            		});                
	          		}, () => {
	            		console.log('navigator disabled');
	          		});
	        	} else {
	          		// Browser doesn't support Geolocation
	          		console.log('navigator disabled');
	        	}
      		}
      		else 
      			this.props.onError()
		}
  	}*/
  	

  	componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    	if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      		if (isScriptLoadSucceed) {
        		//this.initMap()
      		}
      		else 
      			this.props.onError()
		}
	}

  	componentDidMount() {
  		function initMap() {
			var location;
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					location = {
						lat: position.coords.latitude, lng: position.coords.longitude
					};
					var Maps = new window.google.maps.Map(document.getElementById('map'), {
						zoom: 4,
						center: location 
					});
					var marker = new window.google.maps.Marker({
						position: location,
						map: Maps
					});
				});
			} else {
				console.log('navigator geolocation is not supported!');
			}
		}
		const { isScriptLoaded, isScriptLoadSucceed } = this.props
	    if (isScriptLoaded && isScriptLoadSucceed) {
		      this.initMap();
	    }
	}

  	render() {
    	return (
  			<div id="map">Jai inside map</div>
		);
  	}
}

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyBnf4tHBBzEwCXkcna989IZ5lfRS0mlcMo&callback=initMap'])(Map);