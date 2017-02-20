import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Header from './Header';
import Footer from './Footer';

class Root extends Component {
   render() {
      return (
      	<main>
	      	<Header />
			<div className='container'>
			
				{this.props.children}
			
			</div>
			<Footer />
      	</main>
				
      )
   }
}

export default Root;