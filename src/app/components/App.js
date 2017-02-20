// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// import Root from './components/Root';
// import Home from './components/Home';
// import About from './components/About';
// import Events from './components/Events';
// import Contact from './components/Contact';
// import Event from './components/Event';
// import NoMatch from './components/NoMatch';

import User from './components/User';
import Main from './components/Main';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Maxim'
		};
	}

	_changeName() {
		this.setState({
			name: 'newName'
		});
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Root}>
					<IndexRoute component={Home}/>
					<Route path="about" component={About} />
					<Route path="events" component={Events} />
					<Route path="events/:id" component={Event} />
					<Route path="contact" component={Contact} />
					<Route path="*" component={NoMatch}/>
				</Route>
		  </Router>
		);
	}
	
}