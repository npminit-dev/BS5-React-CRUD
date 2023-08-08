// con la expension ES7 React/Redux/GraphQL/React-Native snippets instalada y habilitada,
// solo escribimos rfce o rfc y enter y nos creara el componente de React con el nombre del archivo
// podemos crear componentes de react, react-redux, react-native, react-graphql etc.
import React, { useState, useEffect } from "react";
import { tasks as taskList } from "./data/tasks";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  if (tasks.length === 0) console.log("el array tasks se encuentra vacio");

  // aprovechamos el callback que se ejecuta al renderizar/iniciar el componente para setear el array tasks con el importado del archivo tasks.js
  // los archivos que no tengan componentes pueden tener la extension .js, si tienen alguno deben ser en .jsx (en vite)
  
  useEffect(() => {
    setTasks(taskList)
  }, []);
  // borrar el useEffect hara que nuestro array nunca se inicialice

  return (
    <>
      {tasks.map((elem, index) => {
        return (
          <div className="taskcontainer" key={`taskid_${index}`}>
            <h3 style={{display: 'inline'}}>task id: #<b>{`${elem.id}-${elem.id*1000}`}</b></h3>
            <h3 style={{display: 'inline'}}> task description: <b>{elem.desc}</b> </h3>
          </div>
        );
      })}
    </>
  );
}

export default TaskList;
