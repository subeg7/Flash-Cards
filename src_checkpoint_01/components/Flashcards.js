import React, { Component } from "react";
import { StyleSheet, View,Text,AppRegistry,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {  } from 'react-native'

import Header from "./Header";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

class App extends Component{
  render(){
    return <AppConatiner/>
  }
}

class Flashcards extends Component {
  changeScreen=()=>{
    this.props.navigation.navigate("Review");
  }


  _renderScene() {
    // return <ReviewScreen />;
    // return <NewCardScreen />;
    return <DeckScreen changeScreen={this.changeScreen}/>;
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderScene()}
      </View>
    );
  }
}
// <Button title="test_nav"  onPress={this._testNav}/>

// {this._renderScene()}

let headerOptions = {
  headerStyle: { backgroundColor: "#FFFFFF" },
  // headerCenter: <Header/>
};

const AppNavigator = createStackNavigator({
  Home: { screen: Flashcards, navigationOptions:{title:"All Cards"}},
  Review: { screen: ReviewScreen,navigationOptions:{title:"Review"} },
  CardCreation: { screen: NewCardScreen,navigationOptions:{title:"Create Card"} }
});

const AppConatiner = createAppContainer(AppNavigator);


const styles = StyleSheet.create({ container: { flex: 1, marginTop: 30 } });
export default App;
