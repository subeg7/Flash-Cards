import React, {Component} from 'react';
import { StyleSheet,TouchableHighlight,Image, View,Text,AppRegistry,Button } from "react-native";

export default class List extends React.Component{

  render(){
    //
    return(
      <View style={styles.container}>
        <Text style={styles.id} >
            id:{this.props.id}
        </Text>

        <View style={styles.textArea}>
          <Text style={styles.text} >
              {this.props.text}
          </Text>
        </View>

        <TouchableHighlight onPress={()=>this._onPress()} style={styles.buttonArea} >
          <Image source={require("./../../../del_icon.png")} style={styles.button} resizeMode={'contain'}/>
        </TouchableHighlight>
      </View>
    );
  }

  _onPress(){
    console.warn("list clicked");
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'green',
    // marginTop:5,
    padding:7,
    flexDirection:"row",
    margin:5,
    // height:"auto",
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:"green",
  },
  id:{
    fontSize:14,
    fontWeight:"bold",
    color:"black",
    flex:0.5,
    backgroundColor:"pink",

  },
  textArea:{
    fontSize:20,
    fontWeight:"bold",
    color:"green",
    flex:2,
    padding:5,
    alignItems:"center"

  },
  buttonArea:{
    flex:1,
    alignItems:"center",
    // backgroundColor:"pink",

  },

  button:{
    width: 15,
    height:15,
    flex:0.5,
  }


});
