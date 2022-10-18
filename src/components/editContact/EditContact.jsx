import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getContact} from "../../services/contactsService";
import ContactsListItem from "../contactsListItem/ContactsListItem";
import Button from "@mui/material/Button";
import ContactForm from "../contactForm/ContactForm";
import useContacts from "../../hooks/useContacts";
import AlertInfo from "../alert/AlertInfo";

function EditContact() {
    const { id } = useParams();
    const { save } = useContacts()
    const [contact, setContact] = useState(null);
    const [isEditMode, setEditMode] = useState(false)
    const [isAlertVisible, setAlertVisible] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        getContact(id).then((data) => {
            setContact(data)
        } );
    }, [id]);

    function onSave(contact) {
        setContact(contact)
        save(contact)
        setEditMode(false)
        setAlertVisible(true)
        setTimeout(() => {
            setAlertVisible(false)
        },2000)
    }

    function onUploadImg (code) {
        setContact(code)
        save(code)
    }

    function editHandler () {
        setEditMode(!isEditMode)
    }

    return (
        <div>
            {contact &&
                <div style={{width: '30%'}}>
                    {!isEditMode &&
                        <Button variant='outlined' size={'small'} style={{marginBottom: "30px", width:'250px'}}
                                onClick={() => navigate('/contacts')}>
                            {'<'} Back To Contacts
                        </Button>
                    }
                </div>

            }
            {!isEditMode &&
            <div style={{margin: '0 auto'}}>
                {isAlertVisible &&
                    <AlertInfo message={'Contact was edited'}/>
                }
                {!contact
                    ? <img style={{width: '20%', position:"absolute", left: '40%'}}
                           src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340" alt=""/>
                    : <ContactsListItem imgWidth={300} contact={contact} />}
            </div>
            }
            {contact &&
                <div style={{width: '23%', paddingLeft:'15px'}}>
                    <Button variant={isEditMode ? 'outlined' :"contained"}
                            size={'medium'}
                            style={{marginBottom: "50px"}}
                            onClick={editHandler}>
                        {isEditMode
                            ? '< Back to contact'
                            : 'Edit Contact'
                        }
                    </Button>
                </div>

            }
            {isEditMode &&
                <ContactForm onUploadImg={onUploadImg} onCancel={editHandler} onSave={onSave} contact={contact}/>
            }


        </div>

    )
}

export default EditContact