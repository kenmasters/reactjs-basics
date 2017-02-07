import React, { Component, PropTypes } from "react";


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerTitle: this.props.initialTitle,
		};
	}

	componentWillMount() {
		console.log("Component will mount");
	}

	componentDidMount() {
		console.log("Component did mount");
	}

	componentWillReceiveProps(nextProps) {
		console.log("Component will receive props ", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Should Component Update ", nextProps, nextState);
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("Component will update ", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState){
		console.log("Component did update ", prevProps, prevState);
	}

	componentWillUnmount() {
		console.log("Component will unmount");
	}

	
 
	render() {
		return(
			<div className="container">
				<div className="jumbotron">
				<h1>Lorem Ipsum</h1> 
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum perspiciatis consectetur assumenda tempora magni adipisci id, amet voluptas totam, expedita sit vero facere minima eius debitis a. Dolorum, optio, nemo.</p>
				<button onClick={this.props.greet} type="button" className="btn btn-primary btn-md">Say Hi</button>
				</div>

				<form className="form-inline">
				<input type="text" className="form-control" value={this.state.bannerTitle} onChange={(event) => this.onHandleChange(event)} />
				<button onClick={() => this.changeBannerTitle()} type="button" className="btn btn-primary btn-md">Change Banner Title</button>
				</form>
			</div>
			
		);
	}

	changeBannerTitle() {
		this.props.changeBannerTitle(this.state.bannerTitle)
	}

	onHandleChange(event) {
		this.setState({
			bannerTitle: event.target.value
		});
	}
}

Home.propTypes = {
	greet: PropTypes.func
};