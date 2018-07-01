import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import './scss/main.scss';

let store = createStore(
  reducer, //custom reducers
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

class AppBoilerplate extends Component {
  render() {
  
    return(
      <Provider store={store} >
        <Home />
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppBoilerplate />,
	document.getElementById('app')
);
