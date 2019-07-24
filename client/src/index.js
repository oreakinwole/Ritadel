import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import './index.css';
import './vendors/ionicons-2.0.1/css/ionicons.min.css';
import './vendors/fonts/font-awesome.min.css';
import App from './App';
import ReduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

// Using ReduxThunk Here to help with all asyncronous actions
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store ={store}>
       <App />
    </Provider>,
    document.getElementById('root')
    )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
