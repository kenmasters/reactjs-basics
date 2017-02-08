// Example of Stateless Component
// `props` can still be used though
// we dont need `states` in this component

import React, { Component } from "react";


const StatelessHeader = (props) => {
	render() {
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">WebSiteName</a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li className="active"><a href="/home">Home</a></li>
			      <li><a href="/page-1">Page 1</a></li>
			      <li><a href="/page-2">Page 2</a></li>
			      <li><a href="page-3">Page 3</a></li>
			    </ul>
			  </div>
			</nav>
		);
	}
}

export default StatelessHeader;