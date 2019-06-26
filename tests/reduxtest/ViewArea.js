import React, {Component} from 'react';
import { StyleSheet, View,Text,AppRegistry,Button } from "react-native";
import { Provider,connect } from "react-redux";
import {TO_CAPS} from "./Action";


class ViewArea extends Component{

  // constructor(props){
  //   super(props);
  //   this.state={text:"component init text"};
  // }

  _Capitalize = ()=>{
    console.warn("ready to dispatch");
  }

  render(){
    // const {repos}=this.props;
    return(
      <View style={styles.container}>
        <Text>
          {this.props.text}
        </Text>
        <Button title="Capitalize" onPress={()=>{this.props.Capitalize()}}/>
      </View>
  );
  }
}

const mapStateToProps=(state)=>{
  // this.setState();
  console.warn("mapping state to props"+state.text);
  return {
      text:state.text
    // reduxConnectedText:state.text
  };
};

const mapDispatchToProps=(dispatch)=>{
  return {Capitalize: ()=>{
      console.warn("Action Dispatched");
      dispatch(TO_CAPS)
    }
  };
};


const styles = StyleSheet.create({
 container: { flex: 1, marginTop: 40, }
});


export default connect (mapStateToProps, mapDispatchToProps) (ViewArea);
