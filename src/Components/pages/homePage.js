import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import locateImage from '../../Assets/images/locate_me.jpg';

class HomePage extends Component {
	render()  {
		return (
			<div className="mainSection container-fluid">
				<div className="row">
					<div className="col-md-12 col-sm-12">
						<h1 className="homePageHeading">Lost ?</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-sm-12">
						<div className="wrapper">
				            <img src={locateImage} className="img img-responsive" alt="logo" />
			          	</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-sm-12 btn_wrapper">
						<Link to='/map' className="btn btn-primary btn_LocateMe">Locate Me</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default HomePage;