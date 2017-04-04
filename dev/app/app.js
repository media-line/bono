"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './../js/reducers';


import Employee from './employee/employee';


const store = createStore(
  combineReducers(reducers),
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

ReactDOM.render(
    <Provider store={store}>
        <Employee />
    </Provider>,
    document.getElementById('employeeApp')
);
