import React, { useState } from "react";
import TravelList from "./components/TravelList";
import AddTravel from "./components/AddTravel";
import "./App.css";

function App() {
  const [travels, setTravels] = useState([]);

  const addTravel = (travel) => {
    setTravels([...travels, travel]);
  };

  const removeTravel = (id) => {
    setTravels(travels.filter((travel) => travel.id !== id));
  };

  const markAsDone = (id) => {
    setTravels(
      travels.map((travel) =>
        travel.id === id ? { ...travel, done: !travel.done } : travel
      )
    );
  };

  return (
    <div className="App">
      <h1>Travel List</h1>
      <AddTravel addTravel={addTravel} />
      <TravelList
        travels={travels}
        removeTravel={removeTravel}
        markAsDone={markAsDone}
      />
    </div>
  );
}

export default App;
