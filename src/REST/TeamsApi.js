const TEAMS_ENDPOINT = "https://635178c7dfe45bbd55c11e18.mockapi.io/api/teams";

class TeamsApi {
  //Read method
  get = async () => {
    try {
      const resp = await fetch(TEAMS_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Oops, looks like fetch Teams has an issue", e);
    }
  };

  put = async (team) => {
    //Update method
    try {
      const resp = await fetch(`${TEAMS_ENDPOINT}/${team._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(team),
      });
      return await resp.json();
    } catch (e) {
      console.log("Oops, looks like updating Teams had an issue", e);
    }
  };
}

export const teamsApi = new TeamsApi();
