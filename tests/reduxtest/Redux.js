import React, {Component} from 'react';
import { StyleSheet, View,Text,AppRegistry,Button } from "react-native";
import { createStore } from "redux";
import { Provider,connect } from "react-redux";
import {Reducer } from "./Reducers";
import {TO_CAPS} from "./Action";

let store = createStore(Reducer);



class ViewArea extends Component{
  constructor(props) {
  super(props);
  this.state = { text:"Initial state text"};
  }

  _Capitalize(){
    return "awsome";
  }


  render(){
    return(
      <View style={styles.container}>
        <Text>
          {this.props.text}
        </Text>
        <Button title="Capitalize" onPress={()=>{this.props.Capitalize}}/>
      </View>
  );
  }
}


 class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <ViewArea/>
      </Provider>
  );
  }
}

const mapStateToProps=(state)=>{
    text:state.text
};

const mapDispatchToProps=(dispatch)=>{
  Capitalize: ()=>dispatch(TO_CAPS)
}


const styles = StyleSheet.create({
 container: { flex: 1, marginTop: 40, }
});


export default connect (mapStateToProps, mapDispatchToProps)(App);
