import { createContext, useState, useEffect } from "react";
import teams from "../data/teams";
import 'bootstrap/dist/css/bootstrap.min.css';

export const TeamListContext = createContext({}); // DEBEMOS COLOCAR UN VALOR INICIAL!!!!

export function TeamListContextProvider(props) {
  const [ teamlist, setTeamlist ] = useState([]);
  const [ name, setName ] = useState("");
  const [ points, setPoints ] = useState();
  const [ ids, setIds ] = useState(0)

  useEffect(() => {
    setTeamlist(teams);
    setIds(teams.length)
  }, [ ]);

  function createTeam({ name, points }) {
    setTeamlist([...teamlist, { id: ids, name, points: parseInt(points) }]);
    setIds(ids + 1)
  }

  function updateTeam(id, newName, newPoints) {
    if(newName.trim() !== "" && newPoints!==undefined && newPoints!==''){
      setTeamlist(
        teamlist.map((elem) => {
          if (elem.id === id) return { id: id, name: newName, points: newPoints };
          else return elem;
        })
      );
    } 
  }

  function deleteTeam(id) {
    setTeamlist(
      teamlist.filter((elem, index) => {
        if (elem.id !== id) return elem;
      })
    );
  }

  function sortTeamList(isAscendant, criterion){
    let ordered = []
    if(criterion === 'name'){
      ordered = [...teamlist].sort((a, b) => {
        let aData = new String(a[`${criterion}`])
        let bData = new String(b[`${criterion}`])
        if(aData.localeCompare(bData) < 0) return -1
        else if(aData.localeCompare(bData) > 0) return 1
        else return 1
      })
    } else ordered = [...teamlist].sort((a, b) => {
      if(a[`${criterion}`] > b[`${criterion}`]) return 1
      else return -1
    })
    if(!isAscendant) ordered.reverse();
    setTeamlist(ordered)
  }

  return (
    <TeamListContext.Provider
      value={{
        teamlist,
        createTeam,
        updateTeam,
        deleteTeam,
        sortTeamList,
        name,
        setName, 
        points,
        setPoints,
      }}
    >
      {props.children}
    </TeamListContext.Provider>
  );
}

export default TeamListContext;
