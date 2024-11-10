import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactForm contacts={contacts} setContacts={setContacts} />} />
        <Route path="/contacts" element={<ContactList contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </Router>
  );
}

export default App;
