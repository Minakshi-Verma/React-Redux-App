import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./reducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//step-1:create store, step-2: add Provider abd coonect to store, step-3, import and use applyMiddleware(AMW), step-4, import and add thunk and logger as parameter to AMW
const store = createStore(reducer, applyMiddleware(thunk, logger))
//you can add middlewares as many as you want but order matters and logger should be in the end.

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
