import { useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { readDeck, createCard } from "../utils/api";

import AddCardNavBar from "./AddCardNavBar";
import CardForm from "./CardForm";

function AddCard() {
  const [deck, setDeck] = useState({});
  const [cardBack, setCardBack] = useState("");
  const {deckId} = useParams()
  const [cardFront, setCardFront] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    loadDeck();
  }, [deckId]);

  const handleFrontCard = (event) => setCardFront(event.target.value);
  const handleBackCard = (event) => setCardBack(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, { front: cardFront, back: cardBack });
    setCardFront("");
    setCardBack("");
  };

  if (deck.name) {
    return (
      <div>
        <AddCardNavBar deckName={deck.name} deckId={deckId} />
        <h2>{deck.name}: Add Card </h2>

        <form onSubmit={handleSubmit}>
          <CardForm
            cardFront={cardFront}
            handleFrontCard={handleFrontCard}
            cardBack={cardBack}
            handleBackCard={handleBackCard}
          />
          <button onClick={() => history.push(`/decks/${deckId}`)} type="button" className="btn btn-secondary mr-2"> Done </button> 
          <button type="submit" className="btn btn-primary">  Save  </button>

        </form>
      </div>
    );
  }
  return "Loading...";
}

export default AddCard;
