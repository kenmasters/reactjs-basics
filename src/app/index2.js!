console.log("It works!");

import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import Events from "./components/Events";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bannerTitle: "Banner Title",
			homeMounted: true
		};
	}
	componentDidMount() {
		this.fetchEvents();
	}
	fetchEvents() {
		return [];
	}

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		});
	}

	render() {
		return (
			<Router history = {browserHistory}>
			  <Route path = "{events}" component = {Events} />
			  <Route path = "{home}" component = {Home} />
			</Router>
		);

	}

	render2() {
		let events = {};
		let categories = [
			{
				"resource_uri": "https://www.eventbriteapi.com/v3/categories/103/", 
				"id": "103", 
				"name": "Music", 
				"name_localized": "Music", 
				"short_name": "Music", 
				"short_name_localized": "Music"
			}, 
			{
				"resource_uri": "https://www.eventbriteapi.com/v3/categories/101/", 
				"id": "101", 
				"name": "Business & Professional", 
				"name_localized": "Business & Professional", 
				"short_name": "Business", 
				"short_name_localized": "Business"
			},
			{
				"resource_uri": "https://www.eventbriteapi.com/v3/categories/110/", 
				"id": "110", 
				"name": "Food & Drink", 
				"name_localized": "Food & Drink", 
				"short_name": "Food & Drink", 
				"short_name_localized": "Food & Drink"
			}, 
			{
				"resource_uri": "https://www.eventbriteapi.com/v3/categories/113/", 
				"id": "113", 
				"name": "Community & Culture", 
				"name_localized": "Community & Culture", 
				"short_name": "Community", 
				"short_name_localized": "Community"
			}
		];
		var hmp = "";
		if ( this.state.homeMounted) {
			hmp = (
				<Home 
					greet={this.onGreet} 
					changeBannerTitle={this.onChangeBannerTitle.bind(this)}
					initialTitle={this.state.bannerTitle}
					/>
					);
		}

		return(
			<div className="container">
				<div className="row">
					{hmp}
				</div>

				<div className="row">
					<div className="well well-sm">
						{this.state.bannerTitle}
					</div>
				</div>

				<button onClick={() => this.onChangeHomeMounted()} type="button" className="btn btn-primary btn-md">(Un)Mount Home Comp</button>

				<div className="row">
					<Events events={events} categories={categories}/>
				</div>
				
				
			</div>
		);
	}

	onGreet() {
		alert("Hi")
	}

	onChangeBannerTitle(newTitle) {
		this.setState({
			bannerTitle: newTitle
		});
	}
}

render(
	<App />,
	document.getElementById('app')
);