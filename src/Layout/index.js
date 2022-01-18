import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom"
import HomePage from "./HomePage"
import Study from "./Study"
import CreateDeck from "./CreateDeck"
import Deck from "./Deck"
import EditDeck from "./EditDeck"
import EditCard from "./EditCard"
import AddCard from "./AddCard"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          
        <Route exact path="/">
        <HomePage />
        </Route>

        <Route path="/decks/new">
          <CreateDeck />
        </Route>

        <Route path="/decks/:deckId/cards/new">
          <AddCard />
        </Route>

        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>

        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>

        <Route path="/decks/:deckId/study">
          <Study />
        </Route>

        <Route path="/decks/:deckId">
          <Deck />
        </Route>

        <Route>
        <NotFound />
        </Route>

        </Switch>
      </div>
    </>
  );
}

export default Layout;