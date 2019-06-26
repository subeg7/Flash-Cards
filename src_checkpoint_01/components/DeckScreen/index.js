import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";


import { MockDecks } from "./../../data/Mocks";
import Deck from "./Deck";
import DeckCreation from "./DeckCreation";

class DecksScreen extends Component {
  static displayName = "DecksScreen";

  constructor(props) {
    super(props);
    this.state = { decks: MockDecks };
  }

  static displayName = "DecksScreen";

  static navigationOptions = { title: "All Decks" };

  _createDeck = name => {
    let createDeckAction = addDeck(name);
    this.props.createDeck(createDeckAction);
    this.props.navigation.navigate("CardCreation", {
      deckID: createDeckAction.data.id
    });
  };

  _addCards = deckID => {
    this.props.navigation.navigate("CardCreation", { deckID: deckID });
  };

  _review = deckID => {
    this.props.reviewDeck(deckID);
    this.props.navigation.navigate("Review");
  };

  _mkDeckViews() {
    if (!this.state.decks) {
      return null;
    }

    return this.props.decks.map(deck => {
      return (
        <Deck
          deck={deck}
          count={this.props.counts[deck.id]}
          key={deck.id}
          navigation={this.props.navigation}
          add={() => {
            this._addCards(deck.id);
          }}
          review={() => {
            this._review(deck.id);
          }}
        />
      );
    });
  }

  render() {
    return (
      <View>
        {this._mkDeckViews()}
        <DeckCreation />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deckAction => {
      dispatch(deckAction);
    },
    reviewDeck: deckID => {
      dispatch(reviewDeck(deckID));
    }
  };
};


const mapStateToProps = state => {
  return {
    decks: state.decks,
    counts: state.decks.reduce(
      (sum, deck) => {
        sum[deck.id] = deck.cards.length;
        return sum;
      },
      {}
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen);
