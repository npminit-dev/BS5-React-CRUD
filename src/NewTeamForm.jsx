import React from "react";
import { TeamListContext } from "./contexts/TeamListContext";
import { useContext, useState } from "react";

function NewTeamForm() {
  const { createTeam, setName, name, setPoints, points } = useContext(TeamListContext);


  function handleSubmit(e) {
    e.preventDefault();
    createTeam({ name, points });
  }

  return (
    <form
    id="myForm"
      className="pt-3 pb-3"
      action=""
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="input-group mb-2">
        <span className="input-group-text" id="basic-addon1">Name</span>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Insert team name" 
          required
          onChange={(e) => {
            setName(e.target.value);
          }}></input>
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text" id="basic-addon1">Points</span>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Insert team name" 
          required
          onChange={(e) => {
            setPoints(e.target.value);
          }}></input>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-success" type="submit">CREATE</button>
      </div>
    </form>
  );
}

export default NewTeamForm;
