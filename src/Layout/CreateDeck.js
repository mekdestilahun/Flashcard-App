
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import {Link} from "react-router-dom";


function CreateDeck() {
  const [newDeck, setNewDeck] = useState("");
  const [newDescriptions, setNewDescriptions] = useState("");

  const history = useHistory();

  const handleNameChange = (event) => setNewDeck(event.target.value);
  const handleDescriptionChange = (event) =>
    setNewDescriptions(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    createDeck({
      name: newDeck,
      description: newDescriptions,
    }).then((newDeck) => history.push(`/decks/${newDeck.id}`));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
    
      <h1>Create Deck</h1>

      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="deckName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="deckName"
            placeholder="Deck Name"
            onChange={handleNameChange}
            value={newDeck}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deckDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="deckDescription"
            placeholder="Brief description of the deck"
            rows="3"
            onChange={handleDescriptionChange}
            value={newDescriptions}
          ></textarea>
        </div>

        <button
          onClick={() => history.push("/")}
          type="button"
          className="btn btn-secondary mr-2"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;
