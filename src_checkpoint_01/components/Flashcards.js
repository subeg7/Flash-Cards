import React, { Component } from "react";
import { StyleSheet, View,Text,AppRegistry,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./../reducers";

import Header from "./Header";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

let store = createStore(reducer);

class App extends Component{
  render(){
    return(
    <Provider store={store}>
      <AppConatiner/>
    </Provider>
  );
  }
}

class Flashcards extends Component {
  changeScreen=()=>{
    this.props.navigation.navigate("Review");
  }


  _renderScene() {
    // return <ReviewScreen />;
    // return <NewCardScreen />;
    return <DeckScreen navigation={this.props.navigation}/>;
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
