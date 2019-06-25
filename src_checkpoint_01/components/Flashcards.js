import React, { Component } from "react";
import { StyleSheet, View,Text,AppRegistry,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {  } from 'react-native'

import Heading from "./Header";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

class App extends Component{
  render(){
    return(
      <AppConatiner/>
    );
  }
}

class Flashcards extends Component {
  _testNav(){
    // this.props.navigation.navigate("Review");
    if(!(this.props.navigation)) console.warn("navigation obj is empty");
    else console.warn("Success navigating");
  }
  _renderScene() {
    // console.warn("");
    // return <ReviewScreen />;
    // return <NewCardScreen />;
    return <DeckScreen/>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Heading />
        <Button title="test_nav"  onPress={this._testNav}/>
      </View>
    );
  }
}
// {this._renderScene()}

const AppNavigator = createStackNavigator({
  Home: { screen: Flashcards },
  Review: { screen: ReviewScreen },
  CardCreation: { screen: NewCardScreen }
});

const AppConatiner = createAppContainer(AppNavigator);
const styles = StyleSheet.create({ container: { flex: 1, marginTop: 30 } });


export default App;
