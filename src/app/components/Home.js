import React, { Component } from "react";

import Comments from './Comments';
import User from './User';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h3>Home</h3>
				<hr />
				<button type="button" className="btn btn-default" onClick={this.props.route._handleButton}>Change name</button>
				<User name={this.props.route.name} />
				<hr />
				{/*Comments Section*/}
				<Comments />
			</div>
		);
	}
	
}

export default Home;