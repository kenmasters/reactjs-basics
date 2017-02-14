console.log("It works!");


import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
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
import GithubApi from './components/GithubApi';


const initialState = {
    score: 1,
    lastValues: [],
    username: "Max"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                score: state.score + action.num,
                lastValues: [...state.lastValues, action.num]
            };

            break;
        case "SUBTRACT":
            state = {
                ...state,
                score: state.score - action.num,
                lastValues: [...state.lastValues, action.num]
            };
            break;
    }
    return state;
};

const store = createStore(reducer);

// Register some action
// action type is required and must be unique
const add = (num) => {
	return {
		type: 'ADD',
		num: num
	}
}

const subtract = (num) => {
	return {
		type: 'SUBTRACT',
		num: num
	}
}

// Observe state changes
store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

store.dispatch(add(100));
store.dispatch(add(10));
store.dispatch(subtract(80));



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Max"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
    	return (
    		<div>
    			<GithubApi userName='niljr'/>
    		</div>
    	);
    }

}

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: 'Maxim'
// 		};
// 	}

// 	_changeName() {
// 		this.setState({
// 			name: 'newName'
// 		});
// 	}

// 	render() {
// 		return (
// 			<Router history={browserHistory}>
// 				<Route path="/" component={Root}>
// 					<IndexRoute component={Home}/>
// 					<Route path="about" component={About} />
// 					<Route path="events" component={Events} />
// 					<Route path="events/:id" component={Event} />
// 					<Route path="contact" component={Contact} />
// 					<Route path="*" component={NoMatch}/>
// 				</Route>
// 		  </Router>
// 		);
// 	}
	
// }

render(
	<App />,
	document.getElementById('app')
);