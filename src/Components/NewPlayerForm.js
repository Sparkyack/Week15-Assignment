import React, { useState } from "react";

export const NewPlayerForm = (props) => {
  //sets all staes
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState(undefined);
  const [playerId, setPlayerId] = useState(0);

  //Handles the number input, makes sure its not a string but an int
  const handleNumberInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setNumber(int >= 0 ? int : "");
  };

  //this sets the state when the button is clicked
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

  //html form that is rendered with the update function
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
