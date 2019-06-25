import React from "react";
import { View, Text,Button } from "react-native";

class HomeScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>Home Screen</Text>
        <Button title="Goto: Login"
        onPress={this.changeScreen}
        />
      </View>
    );
  }

  changeScreen=()=>{
    this.props.navigation.navigate("Login");
  }
}

  export default HomeScreen;
