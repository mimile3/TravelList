import React, { useState } from "react";

function AddTravel({ addTravel }) {
  const [destination, setDestination] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      destination.trim() &&
      startingPoint.trim() &&
      startDate.trim() &&
      endDate.trim()
    ) {
      addTravel({
        id: Date.now(),
        destination,
        startingPoint,
        startDate,
        endDate,
        done: false,
      });
      setDestination("");
      setStartingPoint("");
      setStartDate("");
      setEndDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
      />
      <input
        type="text"
        value={startingPoint}
        onChange={(e) => setStartingPoint(e.target.value)}
        placeholder="Point de départ"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Date de début"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="Date de fin"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddTravel;
