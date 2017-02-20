import React, { Component } from "react";
import {connect} from "react-redux";

import Comments from './Comments';
import User from './User';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.user)
		return(
			<div>
				<h3>Home</h3>
				<hr />
				<button type="button" className="btn btn-default" onClick={this.props.route._handleButton}>Change name</button>
				<User name={this.props.route.name} />
				<User name={this.props.user} />
				<hr />
				{/*Comments Section*/}
				<Comments />
			</div>
		);
	}
	
}

export default Home;

const mapStateToProps = state => {
	return {
		user: state.userReducer
	};
};

const mapDispatchToProps = action => {};

connect(mapStateToProps, mapDispatchToProps);

