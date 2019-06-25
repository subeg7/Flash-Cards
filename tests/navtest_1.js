// In App.js in a new project

import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DeckScreen from './../src_checkpoint_01/components/DeckScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="test_nav"  onPress={this._testNav}/>
      </View>
    );
  }


_testNav(){
    if(!this.props.navigation) console.warn("navigation obj is empty");
    else console.warn("Success navigating");
  }

}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
