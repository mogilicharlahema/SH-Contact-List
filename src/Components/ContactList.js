import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'; 
import styles from "../Components/ContactForm.module.css";

const ContactList = ({ contacts, setContacts }) => {
  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate("/", { state: { editIndex: index } });
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleAddContact = () => {
    navigate("/"); 
  };

  return (
    <div className={styles.contactsList}>
      <h2>Saved Contacts</h2>
      <Button 
        text="Add Contact" 
        onClick={handleAddContact} 
        className={styles.addContact} 
        icon="fas fa-plus" 
      />
      {contacts.length > 0 ? ( // Check if there are contacts
        <ol>
          {contacts.map((contact, index) => (
            <li key={index}>
              <div className={styles.contactInfo}>
                <i className="fas fa-user"></i>
                <span>{contact.firstname} {contact.lastname}</span> 
                <i style={{marginLeft:"22px"}} className="fas fa-phone"></i> 
                <span>{contact.mobileNumber}</span> 
                <i style={{marginLeft:"22px"}} className="fas fa-envelope"></i>
                <span>{contact.email}</span>
              </div>
              <div>
                <Button 
                  text="Edit" 
                  onClick={() => handleEdit(index)} 
                  className={styles.edit} 
                  icon="fas fa-edit" 
                />
                <Button 
                  text="Delete" 
                  onClick={() => handleDelete(index)} 
                  className={styles.delete} 
                  icon="fas fa-trash-alt" 
                />
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p>No contacts saved yet.</p> 
      )}
    </div>
  );
};

export default ContactList;
