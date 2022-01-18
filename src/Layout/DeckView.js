import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

import DeckCards from "./DeckCards";

function DeckView({ deckName, deckDescription, deckId, cards, path }) {
  const history = useHistory();

  const deleteHandler = async (deckId) => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it")
    ) {
      await deleteDeck(deckId);
      history.push("/");
    } else {
      history.go(0)
    }
  };

  return (
    <>
      <div>
        <h1>{deckName}</h1>
        <p>{deckDescription}</p>

        <button
          onClick={() => history.push(`/decks/${deckId}/edit`)}
          type="button"
          className="btn btn-secondary mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => history.push(`/decks/${deckId}/study`)}
          type="button"
          className="btn btn-primary mr-2"
        >
          Study
        </button>
        <button
          onClick={() => history.push(`/decks/${deckId}/cards/new`)}
          type="button"
          className="btn btn-primary mr-2"
        >
          Add Cards
        </button>
        <button
          onClick={() => deleteHandler(deckId)}
          type="button"
          className="btn btn-danger mr-2"
        >
          Delete
        </button>
      </div>
      <div>
        <h2>Cards</h2>
        <DeckCards cards={cards} deckId={deckId} path={path} />
      </div>
    </>
  );
}

export default DeckView;
