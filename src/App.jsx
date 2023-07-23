import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact";
export default function App() {
  
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact setSelectedContactId={
          setSelectedContactId} selectedContactId ={selectedContactId}/>
      ) : (
       <ContactList setSelectedContactId={setSelectedContactId}  />
      )}
    </>
  );
}

//This will center the contents, make the table rows clickable
export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <div className="App">
      {selectedContactId ? (
        <SelectedContact setSelectedContactId={
          setSelectedContactId} selectedContactId ={selectedContactId}/>
      ) : (
       <ContactList setSelectedContactId={setSelectedContactId}  />
      )}
    </div>
  );
}



