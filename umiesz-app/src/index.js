import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const defaultState = { appName: 'Coss', articles: null};

const reducer = function(state = defaultState, action) {
    switch (action.type) {
        case 'HOME_PAGE_LOADED':
            return { ...state, articles: action.payload.articles }
    }
    return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider> 
), document.getElementById('root'));

registerServiceWorker();
