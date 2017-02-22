import React, { Component } from "react";

class User extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}
	render() {
		return(
			<div>
				<div className="well">Hello <strong>{this.props.name}</strong></div>
			</div>
		);
	}
	
}

export default User;