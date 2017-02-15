import React, { Component } from "react";
import {IndexLink, Link} from 'react-router';
import NavLink from './NavLink';

class Header extends Component {
	render() {
		return(
			<nav className="navbar navbar-inverse">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>                        
			      </button>
			    	<Link className="navbar-brand" to={'/'}>ReactBasics</Link>
			    </div>
    			<div className="collapse navbar-collapse" id="myNavbar">
	    			<ul className="nav navbar-nav navbar-right">
	    				<NavLink to='/'>Home</NavLink>
	    				<NavLink to='/events'>Events</NavLink>
	    				<NavLink to='/about'>About</NavLink>
	    				<NavLink to='/contact'>Contact</NavLink>
	    			</ul>
    			</div>
			  </div>
			</nav>
		);
	}
}

export default Header;