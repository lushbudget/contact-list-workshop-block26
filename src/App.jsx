import { useState, useEffect } from 'react'
import './App.css'
import ContactListUnordered from './contactList.jsx';




function App() {
  const [contactList, setContactList] = useState([]);
  const API_BASE_URL = 'https://jsonplaceholder.typicode.com/'
  useEffect(() => {
    const getContact = async() => {
      const API_BASE_URL = 'https://jsonplaceholder.typicode.com/'
      const response = await fetch(`${API_BASE_URL}users`)
      const jsonObj = await response.json();
      const allUsers = jsonObj;
      setContactList(allUsers);
    }
    getContact()

  }, []);
  useEffect(() => {

  })

return (
    <>
      <div>
        <h1>CONTACT LIST</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
          </tr>
        <ContactListUnordered contactList={contactList}/>
        </table>
      </div>
    </>
  )
}

export default App
