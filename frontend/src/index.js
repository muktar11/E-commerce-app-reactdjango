import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import 'semantic-ui-css/semantic.min.css';
import '../../../../../static/cebula/Semantic-UI-CSS-master/semantic.min.js';
import '../../../../../static/cebula/Semantic-UI-CSS-master/semantic.min.css';

import authReducer from "./store/reducers/auth";
import cartReducer from "./store/reducers/cart";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
