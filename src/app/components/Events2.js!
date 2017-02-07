import React, { Component, PropTypes } from "react";

export default class Events extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		// console.log("Immediately before initial rendering");
	}

	componentDidMount() {
		// console.log("Immediately after initial rendering");
	}

	componentWillReceiveprops(nextProps) {
		// console.log("When component receives new props");
	}

	shouldComponentUpdate() {
		// console.log("Before rendering, after receiving new props or state.");
		// return false; To prevent rerendering
		return true;
	}

	componentWillUpdate() {

	}

	componentDidUpdate() {
		
	}

	componentWillUnmount() {
		
	}
	
	render() {
		// console.log(this.props.categories[0].name)
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

Events.propTypes = {
	events: PropTypes.object
};