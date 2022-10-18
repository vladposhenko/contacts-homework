import React, {useEffect, useState} from "react";
import useContacts from "../../hooks/useContacts";
import useTheme from "../../hooks/useTheme";
import ContactForm from "../contactForm/ContactForm";
import ContactsList from "../contactsList/ContactsList";
import "./Contacts.css";
import Button from '@mui/material/Button';
import Loader from "../loader/Loader";
import AlertInfo from "../alert/AlertInfo";


function getEmptyContact() {
  return {
    name: "",
    surname: "",
    phone: "",
  };
}


function Contacts() {
  const { theme, setTheme, THEMES } = useTheme();
  let { contacts, remove, save, isLoading } = useContacts();
  const [selectedContact, setSelectedContact] = useState(null);
  const [isAlertVisible, setAlertVisible] = useState(false)
  const isFormVisible = !!selectedContact;

  const onAddNewBtnClick = () => {
    setSelectedContact(getEmptyContact());
  };

  const closeForm = () => {
    setSelectedContact(null);
  };

  const onContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const onSave = (contact) => {
    save(contact);
    closeForm();
    setAlertVisible(true)
    setTimeout(() => {
      setAlertVisible(false)
    },2000)
  };

  const onContactDelete = (contact) => {
    contacts.filter(c => c.id !== contact.id)
    remove(contact.id);
    setAlertVisible(true)
    setTimeout(() => {
      setAlertVisible(false)
    },2000)
  };

  const toggleTheme = () => {
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);
  };



  return (
    <div className="container" style={{paddingBottom: "40px"}}>
      <h1 style={{textAlign:'center'}}>My Contacts</h1>
      {!isFormVisible ? (
        <>
          {isLoading
          ? <Loader/>
          :( <div>
                    {isAlertVisible &&
                        <AlertInfo message={'Success'}/>
                    }
                    <ContactsList
                        contacts={contacts}
                        onSelect={onContactSelect}
                        onDelete={onContactDelete}
                    />
                <Button disabled={isLoading} color="primary" variant="contained" onClick={onAddNewBtnClick}>Add new</Button>
              </div>
              )}

        </>
      ) : (
        <ContactForm
          contact={selectedContact}
          onCancel={closeForm}
          onSave={onSave}
        />
      )}
    </div>
  );
}

export default Contacts;
