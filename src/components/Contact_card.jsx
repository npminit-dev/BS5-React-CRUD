
function Contact_card({contact, deleteContact}) {
  return (
    <div>
      <li>
        <span>ContactName: {contact.name} - </span>
        <span>Type: {contact.type ? "cell" : "landline"} - </span>
        <span>Number: {contact.number} - </span>
        <button onClick={() => deleteContact({...contact})}> {/* CUIDADO! DEBEMOS ENVOLVER CON UNA FUNCION ANONIMA! */}
          DEL
        </button>
      </li>
    </div>
  );
}

export default Contact_card
