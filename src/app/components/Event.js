import React, { Component } from "react";

class Event extends Component {

	render() {
		return(
			<div>
				<h3>Event Page</h3>
				<p>Event ID: {this.props.params.id}</p>
			</div>
		);
	}
	
}

export default Event;