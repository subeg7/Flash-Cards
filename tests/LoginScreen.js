import React from "react";
import { View, Text,Button } from "react-native";
import DashboardScreen from "./DashboardScreen";

export default class LoginScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>Login Screen</Text>
        <DashboardScreen changeScreen={this.changeScreen}/>
      </View>
    );
  }


  // <Button title="Goto:Home Login Parent"
  // onPress={this.changeScreen}
  // />
  changeScreen=()=>{
    this.props.navigation.navigate("Home");
  }
}
