import React, { Component, PropTypes } from "react";

export default class Event extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props.categories[0].name)
		return(
			<div className="container">
				<h3>Events categories</h3>
				 <ul>
				 	{this.props.categories.map(cat => <li key={cat.id}><a href={cat.resource_uri}>{cat.name}</a></li>)}
				 </ul>
			</div>
		);
	}
}