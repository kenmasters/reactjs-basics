import React, { Component } from 'react';

const urlForUserName = username => `https://api.github.com/users/${username}`;

class GithubApi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			requestFailed: false,
		};
	}
	
	componentDidMount() {
		fetch(urlForUserName(this.props.userName))
		.then(response => {
			if(!response.ok) {

				this.setState({
					requestFailed: true,
				})

				throw Error('Network request failed');
			} 
			return response;
		})
		.then(response => response.json())
		.then(response => this.setState({githubData: response}), () => {
			this.setState({
				requestFailed: true,
			});

		});
	}
	
	render() {
		
		if (!this.state.githubData && !this.state.requestFailed) return <Loader />
		if (this.state.requestFailed) return <RequestFailed />
		return <GithubUser user={this.state.githubData}/>
		
   }
}

const RequestFailed = props => {
	return (
		<div className='alert alert-warning'>
			<p>Request Failed</p>
		</div>
	)
}

const Loader = props => {
	return (
		<div className='alert alert-info'>
			<p><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</p>
		</div>
	)
}

const GithubUser = ({user}) => {
	return (
		<div className="container">
		    <div className="row profile">
				<div className="col-md-3">
					<div className="profile-sidebar">
						{/*<!-- SIDEBAR USERPIC -->*/}
						<div className="profile-userpic">
							<img src={user.avatar_url} className="img-responsive" alt="" />
						</div>
						{/*<!-- END SIDEBAR USERPIC -->*/}
						{/*<!-- SIDEBAR USER TITLE -->*/}
						<div className="profile-usertitle">
							<div className="profile-usertitle-name">
								{user.name}
							</div>
							<div className="profile-usertitle-job">
								{user.login}
							</div>
						</div>
						{/*<!-- END SIDEBAR USER TITLE -->*/}
						{/*<!-- SIDEBAR BUTTONS -->*/}
						<div className="profile-userbuttons">
							<button type="button" className="btn btn-success btn-sm">Follow</button>
							<button type="button" className="btn btn-danger btn-sm">Message</button>
						</div>
						{/*<!-- END SIDEBAR BUTTONS -->*/}
						{/*<!-- SIDEBAR MENU -->*/}
						<div className="profile-usermenu">
							<ul className="nav">
								<li className="active">
									<a href="#">
									<i className="glyphicon glyphicon-home"></i>
									Overview </a>
								</li>
								<li>
									<a href="#">
									<i className="glyphicon glyphicon-user"></i>
									Account Settings </a>
								</li>
								<li>
									<a href="#" target="_blank">
									<i className="glyphicon glyphicon-ok"></i>
									Tasks </a>
								</li>
								<li>
									<a href="#">
									<i className="glyphicon glyphicon-flag"></i>
									Help </a>
								</li>
							</ul>
						</div>
						{/*<!-- END MENU -->*/}
					</div>
				</div>
				<div className="col-md-9">
		            <div className="profile-content">
					   Some user related content goes here...
		            </div>
				</div>
			</div>
			<center>
				<strong>Powered by <a href="#" target="_blank">GithubApi</a></strong>
			</center>
		</div>
		

	)
}

export default GithubApi;


