import React, { Component } from "react";
import {Link} from 'react-router';

class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
			events: [],

		};
	}
	componentDidMount() {
		// let evtApiUrl = 'https://www.eventbriteapi.com/v3/events/?token=VN5HD67GPHGWMHLFMJLL'
		// // fetch('http://codepen.io/jobs.json').then( res => {
		// fetch(evtApiUrl).then( res => {
		// 	console.log('1')

		// 	return res.json()
		// }).then( json => {
		// 	console.log('2')
		// 	const events = json.events;
		// 	this.setState({
		// 		events: events
		// 	});

		// 	// const jobs = json.jobs;
		// 	// this.setState({
		// 	// 	jobs: jobs
		// 	// })
		// }).catch(err =>  {
		//   console.log("Booo");
		// });
	}

	render() {
		return (
			<pre>Temporary disabled.</pre>
		)
	}

	// render() {
	// 	return(
	// 		<div>
	// 			<h3>Events</h3>
	// 			{this.state.events.map(event => 
	// 				<li key={event.id}>
	// 					<Link to={`/events/${event.id}`}>{event.name.text}</Link>
	// 				</li>
	// 			)}
				
	// 		</div>
	// 	);
	// }
}

export default Events;