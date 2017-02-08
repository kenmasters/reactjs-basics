import React, { Component } from "react";
import {IndexLink, Link} from 'react-router';
import NavLink from './NavLink';

class Header extends Component {
	render() {
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			    <Link className="navbar-brand" to={'/'}>WebSiteName</Link>
			    </div>
			    <ul className="nav navbar-nav">
			      <NavLink to='/'>Home</NavLink>
			      <NavLink to='/events'>Event</NavLink>
			      <NavLink to='/contact'>Contact</NavLink>
			      <NavLink to='/about'>About</NavLink>
			     </ul>
			  </div>
			</nav>
		);
	}
}

export default Header;