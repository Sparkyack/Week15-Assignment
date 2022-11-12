import React from "react";
import { NewPlayerForm } from "./NewPlayerForm";

export const Team = (props) => {
  const { team, updateTeam } = props;

  const deletePlayer = (playerId) => {
    const updatedTeam = {
      ...team,
      players: team.players.filter((x) => x.name !== playerId),
    };
    updateTeam(updatedTeam);
  };

  const addNewPlayer = (player) => {
    updateTeam({ ...team, players: [...team.players, player] });
  };
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
  // console.log(team.players);
  return (
    <div className="team-card">
      <h1>{team.name}</h1>
      {players({ players, teamId: team.name, deletePlayer })}
      <NewPlayerForm addNewPlayer={addNewPlayer} />
    </div>
  );
};
