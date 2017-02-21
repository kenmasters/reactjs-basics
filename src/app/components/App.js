import React, { Component } from 'react';
import { Router, BrowserRouter,Route, Link, browserHistory, IndexRoute } from 'react-router';

import Root from './Root';
import Home from './Home';
import About from './About';
import Events from './Events';
import Contact from './Contact';
import Event from './Event';
import NoMatch from './NoMatch';
import User from './User';
import Main from './Main';
import GithubApi from './GithubApi';

class App extends Component {
	render() {
		return (
            <Router history={browserHistory}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path="about" component={About} />
                    <Route path="events" component={Events} disabled={false} />
                    <Route path="events/:id" component={Event} />
                    <Route path="contact" component={Contact} />
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
		);
	}
}

export default App;