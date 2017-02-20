// Reference : https://github.com/mschwarzmueller/reactjs-redux-basics
console.log("It works!!!");


import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import Root from './components/Root';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Event from './components/Event';
import NoMatch from './components/NoMatch';

import User from './components/User';
import Main from './components/Main';
import GithubApi from './components/GithubApi';

const mathReducer = (state = {
	result: 1,
	lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state, // es6 spread operator
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };

            break;
        case "SUBTRACT":
            state = {
                ...state, // es6 spread operator
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const userReducer = (state = {
	name: 'Maxim', 
	age: 27
	}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state, // es6 spread operator
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state, // es6 spread operator
                age: action.payload
            };
            break;
    }
    return state;
};

// create myLogger Middleware
// note: this pattern sequence is important , this is a chain of fat arrow functions
// the call `next(action)` is needed inorder to continue to reducers.
const myLogger = store => next => action => {
	// console.log('Logged action: ', action);
	next(action);
};

// Note: We should combine all our reducers into an object before passing it to the store.
let reducers = {
	mathReducer: mathReducer,
	userReducer: userReducer
}

const store = createStore(
	combineReducers(reducers),	// reducers
	{}, 						// initial state
	applyMiddleware(myLogger, logger())	// middlewares
);

// Register some action
// action type is required and must be unique
const add = (payload) => {
	return {
		type: 'ADD',
		payload: payload
	}
}

const subtract = (payload) => {
	return {
		type: 'SUBTRACT',
		payload: payload
	}
}

const setName = (payload) => {
	return {
		type: 'SET_NAME',
		payload: payload
	}
}

const setAge = (payload) => {
	return {
		type: 'SET_AGE',
		payload: payload
	}
}

// Observe state changes
store.subscribe(() => {
    // console.log("Store updated!", store.getState());
});

store.dispatch(add(100));
store.dispatch(add(10));
store.dispatch(subtract(80));
store.dispatch(setName('Julia'));
store.dispatch(setAge(30));



// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//     	return (
//     		<div>
//     			{/*
// 				<Sample myprop='fooo'>
// 					<h1>Helllo</h1>
// 				</Sample>
//     			*/}
//     			<GithubApi userName='vakila'/>
//     		</div>
//     	);
//     }

// }

// Stateless component with props and children
// const Sample = ({...props, children}) => {
// 	return (
// 		<div>
// 			{props.myprop}
// 			{children}
// 		</div>
// 	)
// };

class App extends Component {
	
	render() {
		return (
            <Provider store={store}>
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
            </Provider>
			
		);
	}
	
}

render(
	<App />,
	document.getElementById('app')
);