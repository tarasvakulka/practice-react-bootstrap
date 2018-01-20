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

//store.dispatch({ type: 'RECEIVE_PRODUCTS', payload: data_products.products })

ReactDOM.render(<Provider store={store}><HashRouter><Route path="/" component={App}/></HashRouter></Provider>, document.getElementById('root'));
registerServiceWorker();

// import { createStore } from 'redux';

// function productsList(state = [], action) {
//     if (action.type === 'RECEIVE_PRODUCTS') {
//         return [
//             ...state,
//             action.payload
//         ];
//     }
//     return state;
// }

// const store = createStore(productsList);

// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// })

// store.dispatch({ type: 'RECEIVE_PRODUCTS', payload: [1,2,3] })