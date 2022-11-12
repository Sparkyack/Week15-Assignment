import React, { useState } from "react";

export const NewPlayerForm = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState(undefined);
  const [playerId, setPlayerId] = useState(0);

  const handleNumberInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setNumber(int >= 0 ? int : "");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && position && number) {
      props.addNewPlayer({ name, position, number, _id: playerId });
      setName("");
      setPosition("");
      setNumber("");
      setPlayerId("");
      console.log("new player", name, position, number, playerId);
    } else {
      console.log("Invalid Input");
    }
  };

  return (
    <div>
      <h4>Add a New Player to your Roster</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name (first,last)"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Position"
          onChange={(e) => setPosition(e.target.value)}
          value={position}
        />
        <input
          typer="text"
          placeholder="Number"
          onChange={handleNumberInput}
          value={number}
        />
        <br></br>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};
