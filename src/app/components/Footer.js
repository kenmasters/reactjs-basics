import React, { Component } from "react";
import {Link} from 'react-router'

const Footer = (props) => {
	let d = new Date();
	let y = d.getFullYear();
	return(
		<div className="bottom-bar">
            <div className="container">
                <small className="copyright">Copyright @ {y}</small>                
            </div>
        </div>
	);
}

export default Footer;