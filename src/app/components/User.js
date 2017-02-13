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
				<div className="well">Hello {this.props.name}</div>
			</div>
		);
	}
	
}

export default User;