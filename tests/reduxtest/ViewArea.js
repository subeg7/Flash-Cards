import React, {Component} from 'react';
import { StyleSheet, View,Text,AppRegistry,Button } from "react-native";
import { Provider,connect } from "react-redux";
import {ADD_ITEM} from "./Action";
import List from "./Components/List";


class ViewArea extends Component{

  _Capitalize = ()=>{
    console.warn("ready to dispatch");
  }


  render(){

    // let lists = this.props.texts.map( (text,index)=>{
    //   console.warn("making list");
    //   return <List text={text} id={++index} key={++index}/>
    // });
    return(
      <View style={styles.container}>
        <Text>
          {this.props.reduxMsg}
        </Text>
        <Button title="Add to List" onPress={()=>{this.props.AddToList()}}/>
        {this.props.lists}
      </View>
  );
  }
}
// <List text="Brown Quick Fox"/>
// <List text="Fox Quick Brown"/>

const mapStateToProps=(state)=>{
  // this.setState();
  // console.warn("texts array recieved:"+state.texts);
  let tempLists = state.texts.map( (text,index)=>{
    // console.warn("making list");
    return <List text={text} id={++index} key={index} index={index}/>
  });
  return {
      reduxMsg:state.text,
      lists:tempLists
    // reduxConnectedText:state.text
  };
};

const mapDispatchToProps=(dispatch)=>{
  return {AddToList: ()=>{
      // console.warn("Action Dispatched");
      dispatch(ADD_ITEM)
    }
  };
};


const styles = StyleSheet.create({
 container: { flex: 1, marginTop: 40, }
});


export default connect (mapStateToProps, mapDispatchToProps) (ViewArea);
