import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Header from './Header';
import Footer from './Footer';

const Root = (props) => {
  return (
  	<main>
      	<Header />
		<div className='container'>
		
			{props.children}
		
		</div>
		<Footer />
  	</main>
			
  );
}

export default Root;