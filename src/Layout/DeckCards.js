import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api/index.js";


function DeckCards({ cards, deckId, url }) {
  const history = useHistory();
  
  const deleteHandler = async (cards) => {
    const response = window.confirm(
      'Delete this card? You will not be able to recover it.'
    )
    if (response) {
      await deleteCard(cards)
      history.go(0)
    }
  }

  const viewCard = cards.map((card, index) => {
    return (
    <div key={index}>
      <div>
        <p>{card.front}</p>
      </div>
      <div>
        <p>{card.back}</p>
      </div>
      <div>
        <button onClick={() => history.push(`/decks/${deckId}/cards/${card.id}/edit`)} type="button" className="btn btn-secondary mr-2">Edit</button>
        <button className="btn btn-danger mr-2" onClick={() => deleteHandler(card.id)}> Delete </button>
      </div>
    </div>
    )
  });
  
  // check for card
  if (cards.length) {
    return <div>{viewCard}</div>;
  } else {
    return "There are no cards in this deck yet!";
  }
}


export default DeckCards;