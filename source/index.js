import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import Navigation from './component/navigation';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from './reducer';
import middlewares from './middleware';
import Home from './view/Home';
const reducer = combineReducers(reducers);

const Store = applyMiddleware(
	...middlewares
)(createStore)(reducer);

class ReactNativeVReaderApp extends Component {
	render() {
		return (
			<Provider store={ Store }>
				<Home />
			</Provider>
		);
	}
}

export default ReactNativeVReaderApp;
