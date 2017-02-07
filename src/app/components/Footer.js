import React, { Component } from "react";
import {Link} from 'react-router'

export default class Footer extends Component {
	render() {
		return(
			<div className="bottom-bar">
	            <div className="container">
	                <small className="copyright">Template Copyright @ <a href="http://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>                
	            </div>
	        </div>
		);
	}
}