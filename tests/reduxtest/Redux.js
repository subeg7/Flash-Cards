import React, {Component} from 'react';
import { StyleSheet, View,Text,AppRegistry,Button } from "react-native";
import { createStore } from "redux";
import { Provider,connect } from "react-redux";
import {Reducer } from "./Reducers";
import {TO_CAPS} from "./Action";
import ViewArea from "./ViewArea";

let store = createStore(Reducer);





 class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <ViewArea/>
      </Provider>
  );
  }
}





export default App;
