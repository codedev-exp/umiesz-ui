import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const defaultState = { appName: 'Cos'};
const reducer = function(state = defaultState, action) {
  return state;
}

const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider> 
), document.getElementById('root'));
registerServiceWorker();
