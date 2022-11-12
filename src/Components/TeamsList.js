import React from "react";
import { Team } from "./Team";
import { teamsApi } from "../REST/TeamsApi";
import "./styles.css";

export class TeamsList extends React.Component {
  state = {
    teams: [],
  };

  componentDidMount() {
    this.fetchTeams();
  }

  fetchTeams = async () => {
    const teams = await teamsApi.get();
    console.log("Teams list", teams);
    this.setState({ teams });
  };

  updateTeam = async (updatedTeam) => {
    await teamsApi.put(updatedTeam);
    this.fetchTeams();
  };

  render() {
    return (
      <div className="table">
        {this.state.teams.map((team) => (
          <Team team={team} key={team._id} updateTeam={this.updateTeam} />
        ))}
      </div>
    );
  }
}
