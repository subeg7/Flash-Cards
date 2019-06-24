import React, { Component } from "react";
import { StyleSheet, View,Text } from "react-native";

import Heading from "./Header";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

export default class Flashcards extends Component {
  _renderScene() {
    console.log("console print");
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

const styles = StyleSheet.create({ container: { flex: 1, marginTop: 30 } });

// export default Flashcards;
