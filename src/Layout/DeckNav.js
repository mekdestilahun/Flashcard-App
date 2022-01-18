import React from "react";
import { Link } from 'react-router-dom';

// navigation for deck
function DeckNav({ deckName }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/"> Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {deckName}
        </li>
      </ol>
    </nav>
  );
}


export default DeckNav;