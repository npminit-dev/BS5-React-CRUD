import Contact_card from "./Contact_card";

function Contact_list({directory, deleteContact}) {
  return (
    <ul>
      {
        directory.map((contact, index) =>{
          return (
            <Contact_card contact={contact} key={`key__${index*1000}`} deleteContact={deleteContact}></Contact_card>
          );
        })
      }
    </ul>
  )
}

export default Contact_list
