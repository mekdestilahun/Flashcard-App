import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api/index.js";

import EditNavBar from "./EditNavBar";
import CardForm from "./CardForm";

function EditCard() {
  const [deck, setDeck] = useState({});
  const [editCard, setEditCard] = useState({});
  const {deckId, cardId} = useParams();
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  //const cardId = useParams().cardId;
  const history = useHistory();

  //geting API

  useEffect(() => {
    async function loadDeck() {
      const deckData = await readDeck(deckId);
      setDeck(deckData);
    }
    async function loadCard() {
      const cardData = await readCard(cardId);
      setEditCard(cardData);
      setCardFront(cardData.front);
      setCardBack(cardData.back);
    }
    loadDeck();
    loadCard();
  }, [deckId, cardId]);

  const handleBackCard = (event) => setCardBack(event.target.value);
  const handleFrontCard = (event) => setCardFront(event.target.value);
 

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard({ ...editCard, front: cardFront, back: cardBack }).then(
      (updatedCard) => history.push(`/decks/${updatedCard.deckId}`)
    );
  };

  return (
    <div>
      <EditNavBar deckName={deck.name} Id={deckId} cardId={cardId} />

      <h1>Edit Card</h1>

      <form onSubmit={handleSubmit}>
        <CardForm
          cardFront={cardFront}
          handleFrontCard={handleFrontCard}
          cardBack={cardBack}
          handleBackCard={handleBackCard}
        />

        <button onClick={() => history.push(`/decks/${deckId}`)} type="button" className="btn btn-secondary mr-2">
          Cancel
        </button>

        <button type="Submit"className="btn btn-primary">
          Submit
        </button>
    
      </form>
    </div>
  );
}


export default EditCard;