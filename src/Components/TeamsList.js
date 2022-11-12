import React from "react";
import { Team } from "./Team";
import { teamsApi } from "../REST/TeamsApi";
import "./styles.css";

export class TeamsList extends React.Component {
  //this componet hold all the teams list and array
  state = {
    teams: [],
  };

  //function to make sure that the componet is working and then reads and updates teams
  componentDidMount() {
    this.fetchTeams();
  }

  //function that reads all teams in the API
  fetchTeams = async () => {
    const teams = await teamsApi.get();
    console.log("Teams list", teams);
    this.setState({ teams });
  };

  //function that updates the API after a change has been made like delete player
  updateTeam = async (updatedTeam) => {
    await teamsApi.put(updatedTeam);
    this.fetchTeams();
  };

  //this is the html rendered that hold all other componets into one
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
