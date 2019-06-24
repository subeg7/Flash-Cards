import React, { Component } from "react";
import { StyleSheet, View,Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Heading from "./Header";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";



class Flashcards extends Component {
  _renderScene() {
    // console.warn("");
    // return <ReviewScreen />;
    // return <NewCardScreen />;
    return <DeckScreen />;
  }
  render() {
    return (
      <View style={styles.container}>
      <Heading>
      {this._renderScene()}
      </Heading>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: Flashcards },
  Review: { screen: ReviewScreen },
  CardCreation: { screen: NewCardScreen }
});


const styles = StyleSheet.create({ container: { flex: 1, marginTop: 30 } });

export default createAppContainer(AppNavigator);
