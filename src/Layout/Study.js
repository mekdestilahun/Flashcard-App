import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api/index.js";
import { useParams, Link } from "react-router-dom";
import StudyCards from "./StudyCards";

function Study() {
  const [deck, setDeck] = useState([]);
  const [cardId, setCardId] = useState(1);
  const deckId = useParams().deckId;

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/deck/${deckId}`}>{deck.name}</Link>{" "}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {" "}
            Study
          </li>
        </ol>
      </nav>
      <h1>Study: {deck.name}</h1>
      <StudyCards
        cards={deck.cards}
        cardId={cardId}
        setCardId={setCardId}
        deckId={deckId}
      />
    </div>
  );
}

export default Study;
