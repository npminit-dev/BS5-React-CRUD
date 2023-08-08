import React from 'react'
import { TeamListContext } from "./contexts/TeamListContext";
import { useContext } from "react";
import TeamCard from './TeamCard'
import TeamListSort from './TeamListSort'

function TeamList() {
  
  const { teamlist } = useContext( TeamListContext )

  return (
    <div className='border'>
      <TeamListSort></TeamListSort>
      <div className='d-flex flex-column p-2'>
      {
        teamlist.map((elem, index) => {
          return (
            <TeamCard key={elem.id} myId={elem.id} myName={elem.name.toUpperCase()} myPoints={elem.points}></TeamCard>
          )
        })
      }
      </div>
    </div>
  )
}

export default TeamList
