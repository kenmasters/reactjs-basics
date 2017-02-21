// Reference : https://github.com/mschwarzmueller/reactjs-redux-basics
console.log("It works!!!");

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import App from './components/App';

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
// store.dispatch(setName('Julia'));
// store.dispatch(setAge(30));

const ReactApp = () => (
	<Provider store={store}>
		<App />    
	</Provider>
);

render(
	<ReactApp />,
	document.getElementById('app')
);