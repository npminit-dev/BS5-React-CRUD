import React, { useState } from 'react'

function NewContact_form({createContact, hasSimilarContact}) {

  const [name, setName] = useState('');
  const [type, setType] = useState(false);
  const [number, setNumber] = useState('');

  // al hacer submit: prevenimos recarga de pagina, creamos el contacto con la funcion del prop, seteamos los valores por defecto de nuevo,
  // para que esto se refleje en los inputs (se vacien al hacer submit) debemos definir el value de los inputs asi: value={name/type/number} al final de todo
  // al setear por defecto con el submit, esto volvera a renderizar las partes de la interfaz que tengan el name, type, number, y asignara esos valores a cada input.value
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!hasSimilarContact({name, type, number})){
      createContact(name, type, number)
      setName('')
      setType(false)
      setNumber('')
    } else alert('El contacto ya se encuentra en la lista! debe diferenciarse al menos en 1 parametro!')
 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ContactName:{" "}
        <input type="text" placeholder="insert contact name" required 
          onChange={e => setName(e.target.value)}
          value={name}
          autoFocus // esto hara que al cargar la pagina, este input tenga el focus sobre el
          ></input>{" "}
      </label>
      <label>
        Is cel?:{" "}
        <input
          type="checkbox"
          onChange={e => setType(e.target.checked)}
          value={type}
        ></input>{" "}
      </label>
      <label>
        Number: <input type="text" placeholder="insert number" required 
          onChange={e => setNumber(e.target.value)}
          value={number}
          ></input>{" "}
      </label>
      <button>CREATE</button>
    </form>
  );
}

export default NewContact_form
