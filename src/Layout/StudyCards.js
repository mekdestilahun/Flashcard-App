import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";


function StudyCards({ cards, cardId, setCardId, deckId }) {
  const [flip, setFlip] = useState(true);
  const history = useHistory();

  if (cards) {
    if (cards.length > 2) {
      return (
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                Card {cardId} of {cards.length}{" "}
              </h5>
              <p className="card-text">
                {" "}
                {flip ? cards[cardId - 1].front : cards[cardId - 1].back}{" "}
              </p>
              <button
                className="btn btn-secondary mr-2"
                onClick={() => setFlip(!flip)}
              >
                {" "}
                Flip
              </button>
              {!flip ? (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (cardId === cards.length) {
                      if (window.confirm("Restart cards?")) {
                        setCardId(1);
                        setFlip(!flip);
                      } else {
                        history.push("/");
                      }
                    } else {
                      setCardId(cardId + 1);
                      setFlip(!flip);
                    }
                  }}
                >
                  Next
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Not enough cards</h2>
          <p>
            {" "}
            You need at least 3 cards to study. there are {cards.length} cards
            in this deck.
          </p>
          <Link to={`/decks/${deckId}/cards/new`}>
            <button className="btn btn-primary">Add Cards</button>
          </Link>
        </div>
      );
    }
  } else {
    return <p>Loading...</p>;
  }


}

export default StudyCards;
