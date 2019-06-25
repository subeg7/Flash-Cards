
import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class navtest extends React.Component {
  render() {

    return <AppConatiner/>
  }
}

class HomeScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>Home Screen</Text>
        <Button title="Goto: Dashboard"
        onPress={this.changeScreen}
        />
      </View>
    );
  }

  changeScreen=()=>{
    this.props.navigation.navigate("Dashboard");
  }
}

class DashboardScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>Dashboard Screen</Text>
      </View>
    );
  }
}

class LoginScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>Login Screen</Text>
      </View>
    );
  }
}



const AppNavigator = createStackNavigator({
  Home:{screen:HomeScreen},
  Dashboard:{screen:DashboardScreen},
  Login:{screen:LoginScreen},
});

const AppConatiner  = createAppContainer(AppNavigator);

export default navtest;
