import React from "react";
import Card from "./Card";

function PersonList({ items }) {
  return (
    <div>
      {items.map((person) => (
        <Card key={person.id} person={person} />
      ))}
    </div>
  );
}

export default PersonList;
