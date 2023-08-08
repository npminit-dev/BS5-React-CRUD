import NewTeamForm from "./NewTeamForm";
import TeamList from "./TeamList";

export function TeamApp() {
  
  return (
    <div className='container-fluid'>
      <NewTeamForm key='newteamform'></NewTeamForm>
      <TeamList>
      </TeamList>
    </div>
  )
}

export default TeamApp
