import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import './App.css';

import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homePage';
import Map from './Components/pages/map';

import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	        <Header />
	        	<Route exact path='/' component={Homepage} />
	        	<Route exact path='/map' component={Map} />
	        <Footer />
	      </div>
      </Router>
    );
  }
}

export default App;
