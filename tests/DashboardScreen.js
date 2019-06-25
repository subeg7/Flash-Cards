import React from "react";
import { View, Text,Button } from "react-native";

export default class DashboardScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>DashboardScreen</Text>
        <Button title="Goto: Home from Child"
        onPress={this.props.changeScreen}
        />
      </View>
    );
  }

  changeScreen=()=>{
    this.props.navigation.navigate("Home");
  }
}
