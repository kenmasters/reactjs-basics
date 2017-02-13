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
				<h3>Main</h3>
				<button className="btn btn-primary" onClick={() => this.props.changeUsername('Anna')}>Change the Username</button>
			</div>
		);
	}
	
}

export default User;