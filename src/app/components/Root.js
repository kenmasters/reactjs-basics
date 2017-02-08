import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Header from './Header';
import Footer from './Footer';

class Root extends React.Component {
   render() {
      return (
         <div className='container'>



            <Header />
				
           {this.props.children}

            <Footer />
         </div>
      )
   }
}

export default Root;