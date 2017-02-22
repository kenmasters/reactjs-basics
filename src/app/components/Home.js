import React, { Component } from "react";
import {connect} from "react-redux";

import {setName} from '../actions';
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
				<div className="form-inline">
					<div className="form-group">
						<input type="text" className="form-control" onBlur={this._handleBlur} defaultValue={this.props.user.name}/>
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-default" >Change name</button>
					</div>
				</div>
				
				<User name={this.props.user.name} />
				<hr />
				{/*Comments Section*/}
				<Comments />
			</div>
		);
	}


	_handleBlur = (event) => {
		this.props.setName(event.target.value);
	}
	
}

// export default Home;

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setName: name => {
			dispatch(setName(name));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)

