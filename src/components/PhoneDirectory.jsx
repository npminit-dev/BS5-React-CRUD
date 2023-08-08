import React, {useState, useEffect} from 'react'
import contacts from "./contacts";
import NewContact_form from './NewContact_form';
import Contact_list from './Contact_list';

function PhoneDirectory() {

  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    setDirectory(contacts)
  },[])

  // esta funcion sera enviada al componente NewContact_form.jsx y aunque esa funcion se ejecute alli, 
  // el elemento al que afecta es al array 'directory' de este mismo componente
  function createContact(name, type, number){ 
    setDirectory([...directory, {name, type, number}])
  }

  function deleteContact({name, type, number}){
    setDirectory(directory.filter((elem) => {
      return elem.name != name || elem.type != type || elem.number != number
    }))
  }

  function hasSimilarContact({name, type, number}){
    return directory.some((elem) => {
      return elem.name == name && elem.type == type && elem.number == number
    })
  }

  return (
    <>
      <NewContact_form createContact={createContact} hasSimilarContact={hasSimilarContact}></NewContact_form>
      <Contact_list directory={directory} deleteContact={deleteContact}></Contact_list>
    </>
  )
}

export default PhoneDirectory
