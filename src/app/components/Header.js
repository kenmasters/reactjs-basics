import React, { Component } from "react";
import {IndexLink, Link} from 'react-router';

export default class Header extends Component {
	render() {
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			    <Link className="navbar-brand" to={'/'}>WebSiteName</Link>
			    </div>
			    <ul className="nav navbar-nav">
			      <li activeClassName={"active"} onlyActiveOnIndex={true}><Link to={'/'}>Home</Link></li>
			      <li activeClassName={"active"}><Link to={'/about'}>About</Link></li>
			      <li activeClassName={"active"}><Link to={'/events'}>Events</Link></li>
			      <li activeClassName={"active"}><Link to={'/contact'}>Contact</Link></li>
			     </ul>
			  </div>
			</nav>
		);
	}
}