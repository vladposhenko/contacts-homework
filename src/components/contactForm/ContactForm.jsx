import React, { useState } from "react";
import "./ContactForm.css";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

function ContactForm(props) {
  const [contact, setContact] = useState({ ...props.contact });
  const [baseImage, setBaseImage] = useState(contact.avatar)
  const onContactFormSubmit = (e) => {
    e.preventDefault();
      console.log(contact)
    props.onSave(contact);
  };

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = async (e) => {
      const file = e.target.files[0]
      const base64 = await convertToBase64(file)
      setBaseImage(base64)
      let contactItem = {
          ...contact,
          avatar:base64
      }
      setContact(contactItem)
      props.onUploadImg(contactItem)
  }

  const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
          const fileReader = new FileReader()
          fileReader.readAsDataURL(file)

          fileReader.onload = () => {
              resolve(fileReader.result)
          }
      })
  }

  return (
    <form style={{width: "50%", margin: "0 auto"}} action="" className="contact-form" onSubmit={onContactFormSubmit}>
        <img  style={{maxWidth: "150px", margin: "0 auto", marginTop: "20px"}}
              src={baseImage} alt=""/>
        <Button style={{margin: '20px 0'}} variant="contained" component="label">
            Upload new image
            <input onChange={handleChange} hidden accept="image/*" multiple type="file" />
        </Button>
      <label htmlFor="nameInput">Name</label>
      <TextField
        type="text"
        name="name"
        id="nameInput"
        value={contact.name}
        onChange={onChange}
      />
      <label htmlFor="surnameInput">Surname</label>
      <TextField
        type="text"
        name="surname"
        id="surnameInput"
        value={contact.surname}
        onChange={onChange}
      />
      <label htmlFor="phoneInput">Phone</label>
      <TextField
        type="text"
        name="phone"
        id="phoneInput"
        value={contact.phone}
        onChange={onChange}
      />
      <div className="buttons" style={{display: 'flex', gap:"20px", marginTop:"20px"}}>
        <Button variant="contained" type="submit" className="pull-right">
          Save
        </Button>
        <Button variant="outlined" type="button" className="pull-left" onClick={props.onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
