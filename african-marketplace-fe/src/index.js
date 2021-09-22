import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import rootReducer from './reducers/index'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);