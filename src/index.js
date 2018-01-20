import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import products from './reducers/products.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import {HashRouter, Route} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

let store = createStore(products, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><HashRouter><Route path="/" component={App}/></HashRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
