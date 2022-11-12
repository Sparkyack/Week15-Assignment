import React from "react";
import { NewPlayerForm } from "./NewPlayerForm";

//exports the team props
export const Team = (props) => {
  const { team, updateTeam } = props;

  //function to delete a player from the roster
  const deletePlayer = (playerId) => {
    const updatedTeam = {
      ...team,
      players: team.players.filter((x) => x.name !== playerId),
    };
    updateTeam(updatedTeam);
  };

  //function to add a new player to the roster
  const addNewPlayer = (player) => {
    updateTeam({ ...team, players: [...team.players, player] });
  };

  //this is the html renderd from the new player form
  const players = () => (
    <ul>
      {team.players.map((player, index) => (
        <li key={index}>
          <label>
            {" "}
            {`Name: ${player.name} Position: ${player.position} Number: ${player.number}`}
          </label>
          <br></br>
          <button onClick={(e) => deletePlayer(player.name)}>
            Delete Player
          </button>
        </li>
      ))}
    </ul>
  );
  console.log(team.players);

  //this is the html rendered from the Read method from the Api
  return (
    <div className="team-card">
      <h1>{team.name}</h1>
      {players({ players, teamId: team.name, deletePlayer })}
      <NewPlayerForm addNewPlayer={addNewPlayer} />
    </div>
  );
};
