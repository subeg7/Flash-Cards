import React, {Component} from 'react';
import { StyleSheet, View,Text,AppRegistry,Button } from "react-native";
import { Provider,connect } from "react-redux";


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

const mapStateToProps=(state)=>{
  return {text:state.text};
}

const mapDispatchToProps=(dispatch)=>{
  return {Capitalize: ()=>dispatch(TO_CAPS)};
}


const styles = StyleSheet.create({
 container: { flex: 1, marginTop: 40, }
});


export default connect (mapStateToProps, mapDispatchToProps) (ViewArea);
