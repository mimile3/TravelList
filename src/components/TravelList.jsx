import React from "react";
import TravelItem from "./TravelItem";

function TravelList({ travels, removeTravel, markAsDone }) {
  return (
    <div>
      {travels.map((travel) => (
        <TravelItem
          key={travel.id}
          travel={travel}
          removeTravel={removeTravel}
          markAsDone={markAsDone}
        />
      ))}
    </div>
  );
}

export default TravelList;
