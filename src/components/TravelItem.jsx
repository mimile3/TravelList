import React from "react";
import "../App.css";

function TravelItem({ travel, removeTravel, markAsDone }) {
  const itemClass = travel.done ? "travel-item done" : "travel-item";

  return (
    <div className={itemClass}>
      <h2>{travel.destination}</h2>
      <p>
        <strong>Point de départ:</strong> {travel.startingPoint}
      </p>
      <p>
        <strong>Date de début:</strong> {travel.startDate}
      </p>
      <p>
        <strong>Date de fin:</strong> {travel.endDate}
      </p>
      <div className="travel-buttons">
        <button onClick={() => markAsDone(travel.id)}>Terminer</button>
        <button onClick={() => removeTravel(travel.id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default TravelItem;
