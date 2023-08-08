import { useState } from 'react'
import './emmet.css'

// emmet: es un plugin instalado por defecto en vscode que nos sirve para crear etiquetas html rapidamente, ej:
// un div contenedor con un un <ul></ul> y 5 <li></li> dentro, y un form con un input text y un boton
// escribiendo: div>ul>li*5^form>input+button y dando a enter se generara:
/*
<div></div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <form action=""><input type="text" /><button></button></form>
</div> 
*/

// sintaxis de emmet: https://docs.emmet.io/abbreviations/syntax/

export function EmmetTest(){
  // la siguiente expresion: div.container>div#firstdiv{primerholamundo}+div#seconddiv[title='sec_div']{segundoholamundo}^div.anothercontainer>div#thirddiv[title='sometitle']{tercerholamundo}
  // generara las etiquetas que se encuentran entre <></> :
  return(
    <>
      <div className="container">
        <div id="firstdiv">primerholamundo</div>
        <div id="seconddiv" title="sec_div">segundoholamundo</div>
      </div>
      <div className="anothercontainer">
        <div id="thirddiv" title="sometitle">tercerholamundo</div>
      </div>
    </>
  )
}

export default function HolaMundo(){
  // con ctrl + k + f damos formato a una seleccion
  return (
    <>
      <h2>Hola Mundo</h2>
      emmet generated jsx:
      <div>
        <span>spantext</span>
        <span>spantext</span>
        <span>spantext</span>
      </div>
      <hr/>
    </>
  );
}

