import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button'; 
import styles from '../Components/ContactForm.module.css';

const ContactForm = ({ contacts, setContacts }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const editIndex = location.state?.editIndex ?? null;

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobileNumber: '',
    email: ''
  });

  useEffect(() => {
    if (editIndex !== null && contacts[editIndex]) {
      setFormData(contacts[editIndex]);
    }
  }, [editIndex, contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (formData.firstname && formData.lastname && formData.mobileNumber && formData.email) {
      if (editIndex !== null) {
        const updatedContacts = contacts.map((contact, index) =>
          index === editIndex ? formData : contact
        );
        setContacts(updatedContacts);
      } else {
        setContacts([...contacts, formData]);
      }

      setFormData({ firstname: '', lastname: '', mobileNumber: '', email: '' });
      navigate('/contacts');
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2>{editIndex !== null ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        type="text"
        name="firstname" 
        placeholder="First Name"
        required
        value={formData.firstname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname" 
        placeholder="Last Name"
        required
        value={formData.lastname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number"
        required 
        value={formData.mobileNumber}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required 
        value={formData.email}
        onChange={handleChange}
      />
      <Button
        text={editIndex !== null ? 'Update Contact' : 'Add Contact'}
        onClick={handleSave}
        className={styles.save}
      />
    </div>
  );
};

export default ContactForm;
