
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api/index";
import EditDeckNavBar from "./EditDeckNavBar";

function EditDeck() {
  const {deckId} = useParams()
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeckName(response.name);
      setDeckDescription(response.description);
    }
    loadDeck();
  }, [deckId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck({
      id: deckId,
      name: deckName,
      description: deckDescription,
    }).then((updatedDeck) => history.push(`/decks/${updatedDeck.id}`));
  };

  const handleDescription = (event) => setDeckDescription(event.target.value);
  const handleNameChange = (event) => setDeckName(event.target.value);

  return (
    <div>
      <EditDeckNavBar deckName={deckName} deckId={deckId} />

      <h1>Edit Deck</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="deckName">Name</label>
          <textarea
            id="deckName"
            rows="1"
            name="deckName"
            className="form-control"
            onChange={handleNameChange}
            value={deckName}
          />
        </div>
        <div>
          <label htmlFor="deckDescription">Description</label>
          <textarea
            id="deckDescription"
            name="deckDescription"
            className="form-control"
            rows="5"
            onChange={handleDescription}
            value={deckDescription}
          />
        </div>

        <button
          onClick={() => history.push(`/decks/${deckId}`)}
          type="button"
          className="btn btn-secondary mr-2"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary mr-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditDeck;
