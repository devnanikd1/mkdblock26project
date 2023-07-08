import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function SelectedContact({  selectedContactId, setSelectedContactId }){
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)              
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact()
      }, []);
    console.log (contact);
    console.log (selectedContactId);
    return(
    <div >
    {contact && 
        <ul>
        <li>{contact.name}</li> 
        <li>{contact.email}</li>
        <li>{contact.phone}</li>     
        <li>{contact.address.street} {contact.address.suite}</li>
        <li>{contact.address.city}</li>
        <li>{contact.address.zipcode}</li>
        </ul>}
        </div>) 
  }
    
