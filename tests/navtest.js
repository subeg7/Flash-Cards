
import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./HomeScreen";
import DashboardScreen from "./DashboardScreen";
import LoginScreen from "./LoginScreen";

class navtest extends React.Component {
  render() {
    return <AppConatiner/>
  }
}

const AppNavigator = createStackNavigator({
  Home:{screen:HomeScreen},
  Dashboard:{screen:DashboardScreen},
  Login:{screen:LoginScreen},
});

const AppConatiner  = createAppContainer(AppNavigator);

export default navtest;
