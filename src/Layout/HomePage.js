import React, { useEffect, useState } from "react";
import { listDecks, deleteDeck } from "../utils/api/index.js";
import { useHistory } from "react-router-dom";
function HomePage() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  async function loadDecks() {
    const response = await listDecks();
    setDecks(response);
  }
  async function deckDeleteHandler(Id) {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      await deleteDeck(Id);
      loadDecks();
    }
  }
  useEffect(() => {
    loadDecks();
  }, []);

  return (
    <div>
      <button  onClick={() => history.push(`/decks/new`)} type="button" className="btn btn-secondary"> Create Deck</button>
      <ol>
        {decks.map((deck) => (
          <li key={deck.id}>
            <h2>{deck.name}</h2>
            <p>{deck.cards.length} cards</p>
            <p>{deck.description}</p>
           
            <button  onClick={() => history.push(`/decks/${deck.id}`)} type="button" className="btn btn-secondary mr-2" >View</button>
            <button onClick={() => history.push(`/decks/${deck.id}`)} type="button" className="btn btn-primary mr-2">Study</button>
            <button onClick={() => deckDeleteHandler(deck.id)}  className="btn btn-danger mr-2">Delete</button>
      
          </li>
        ))}
      </ol>
    </div>
  );
}
export default HomePage;

