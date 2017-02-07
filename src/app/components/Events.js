import React, { Component } from "react";
import {Link} from 'react-router';

class Events extends Component {
	render() {
		return(
			<div>
				<h3>Events</h3>
				<Link to={'/event/12'}>Event 12</Link>
			</div>
		);
	}
}

export default Events;