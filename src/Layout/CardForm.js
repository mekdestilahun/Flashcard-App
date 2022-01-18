import React from "react"

//for adding and editing cards

 function CardForm({cardFront, handleFrontCard, cardBack, handleBackCard}) {
    return (
        <div>
            <div>
            <label htmlFor="cardFront">Front</label>
            <textarea
            id="cardFront"
            name="cardFront"
            className="form-control"
            placeholder="front side of card"
            rows="3"
            onChange={handleFrontCard}
            value={cardFront}
            />
            </div>
            <div>
                <label htmlFor="cardBack">Back</label>
                <textarea
                id="cardBack"
                name="cardBack"
                className="form-control"
                placeholder="Back side of card"
                rows="3"
                onChange={handleBackCard}
                value={cardBack}
                />
            </div>
        </div>
    )
}


export default CardForm;