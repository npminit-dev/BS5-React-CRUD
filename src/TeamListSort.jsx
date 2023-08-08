import React from 'react'
import { TeamListContext } from "./contexts/TeamListContext";
import { useContext, useState } from "react";

function TeamListSort() {

  const [idAsc, setIdAsc] = useState(true);
  const [nameAsc, setNameAsc] = useState(true);
  const [pointsAsc, setPointsAsc] = useState(false);

  const { sortTeamList } = useContext(TeamListContext)

  return (
    <div className='d-flex flex-row justify-content-between pt-1 pb-1 ps-2 pe-2 border overflow-hidden h-25'>
      <div
        className='d-flex justify-content-center align-items-center'
      >SORT ORDER</div>
      <div className='row'>
        <button
          className='col btn btn-outline-secondary ms-1 me-1' 
          onClick={(e) => {
          sortTeamList(idAsc, 'id')
          setIdAsc(!idAsc)
        }}>ID</button>
        <button 
          className='col btn btn-outline-secondary ms-1 me-1'
          onClick={(e) => {
          sortTeamList(nameAsc, 'name')
          setNameAsc(!nameAsc)
        }}>NAME</button>
        <button 
          className='col btn btn-outline-secondary ms-1 me-1'
          onClick={(e) => {
          sortTeamList(pointsAsc, 'points')
          setPointsAsc(!pointsAsc)
        }}>POINTS</button>
      </div>
    </div>
  )
}

export default TeamListSort
