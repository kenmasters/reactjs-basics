import React, { Component } from "react";

class Event extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: '',
			eventName: '',
			eventDes: '',
		};
	}


	componentDidMount() {
		this._fetchEvents();
		// let evtId = this.props.params.id;
		// let evtApiUrl = `https://www.eventbriteapi.com/v3/events/${evtId}/?token=VN5HD67GPHGWMHLFMJLL`;
		// fetch(evtApiUrl).then( res => {
		// 	return res.json();
		// }).then( json => {
		// 	const event = json;
		// 	this.setState({
		// 		event: event,
		// 		eventName: event.name.text,
		// 		eventDes: event.description.text,
		// 	});
		// }).catch(err =>  {
		//   console.log("Booo");
		// });

	}
	render() {
		let event = this.state.event;
		// console.log('hey: ' , event.id);
		// console.log('hey: ' , this.state.event);
		return(
			<div>
				<h3>Event: {this.state.eventName}</h3>
				<p>Event ID: {this.props.params.id}</p>
				<p>{this.state.eventDes}</p>
			</div>
		);
	}

	_fetchEvents = () => {
	
		let evtId = this.props.params.id;
		let evtApiUrl = `https://www.eventbriteapi.com/v3/events/${evtId}`;

		fetch(evtApiUrl, {
			mode: 'no-cors',
			 headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			    'Authorization': 'Bearer VN5HD67GPHGWMHLFMJLL'
			  }
		}).then( res => {
			return res.json();
		}).then( json => {
			const event = json;
			this.setState({
				event: event,
				eventName: event.name.text,
				eventDes: event.description.text,
			});
		}).catch(err =>  {
		  console.log("Booo");
		});
	}
	
}

export default Event;