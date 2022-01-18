import React, { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import DeckNav from "./DeckNav";
import DeckView from "./DeckView";


function Deck() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  const deckId = useParams().deckId;
  const { path } = useRouteMatch();

  useEffect(() => {
    async function loadDeck() {
      const deckData = await readDeck(deckId);
      setDeck(deckData);
      setCards(deckData.cards);
    }
    loadDeck();
  }, [deckId]);

  if (deck.name) {
    return (
      <div>
        <DeckNav deckName={deck.name} />
        <Route path={path}>
          <DeckView
            deckName={deck.name}
            deckDescription={deck.description}
            deckId={deckId}
            cards={cards}
            path={path}
          />
        </Route>
      </div>
    );
  }
  return "Loading...";
}

export default Deck;
