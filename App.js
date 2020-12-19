import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Components/Routes'
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './src/State/User';

const composeEnhancers = compose;
const store =  createStore(userReducer, composeEnhancers(applyMiddleware(thunk) ));

export default function App() {
    return (
        <Provider store={store} >
          <Routes />
      </Provider>
    );
}
