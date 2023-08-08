import React from 'react'
import { TeamListContext } from "./contexts/TeamListContext";
import { useContext } from "react";

function TeamCard({myId, myName, myPoints}) {

  const { deleteTeam, updateTeam, name, points } = useContext(TeamListContext)

  const haveWrongData = () => name === "" || name === undefined || points === "" || points === undefined

  return (
    <div className='pt-1 pb-1 d-flex justify-content-between'>
      <div className='w-50 ps-1 pe-1 d-flex justify-content-between align-items-center'>
        <span>{myId}</span>
        <span>{myName}</span>
        <span><strong>{myPoints}</strong></span>
      </div>
      <div>
        <button 
          className='btn btn-outline-primary'
          onClick={(e) => {
            if(haveWrongData()) alert("'Name' and 'Points' field cannot be empty !")
            else updateTeam(myId, name, points)
            e.preventDefault()
        }}>UPDATE</button>
        <button 
          className='btn btn-outline-danger'
          onClick={(e) => {
            e.preventDefault()
            deleteTeam(myId)
        }}>DELETE</button>
      </div>
    </div>
  )
}

export default TeamCard
