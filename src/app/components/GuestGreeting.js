import React, { Component } from "react";

export default class GuestGreeting extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className="container">
				<h1>Hello Guest!</h1>
			</div>
		);
	}
}

