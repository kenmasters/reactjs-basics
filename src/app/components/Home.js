import React, { Component } from "react";

import Comments from './Comments';

class Home extends Component {

	render() {
		return(
			<div>
				<h3>Home</h3>

				<Comments />
			</div>
		);
	}
	
}

export default Home;