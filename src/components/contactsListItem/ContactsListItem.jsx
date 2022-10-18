import {Link, useNavigate} from "react-router-dom";
import "./styles.css";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

function ContactsListItem({ contact, onDelete, onSelect, imgWidth }) {
    const navigate = useNavigate()
  const onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(contact);
  };
  return (
      <ListItem onClick={() => navigate('/contacts/' + contact.id) }
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
              {!imgWidth &&
                  <DeleteIcon onClick={onDeleteClick} />
              }
          </IconButton>
        }
      >
        <Link className="flex" to={`/contacts/${contact.id}`}>
            <ListItemAvatar>
              <Avatar style={imgWidth && {width: '100%', height: '100%', borderRadius:'0'}}>
                  <img style={{
                      backgroundSize: 'cover',
                      maxWidth: '100%',
                      width:imgWidth,
                  }} src={contact.avatar} alt=""/>
              </Avatar>
            </ListItemAvatar>
            {imgWidth
             ? (
                 <div style={{margin:"20px"}}>
                     <p>Name: {contact.name}</p>
                     <p>Surname: {contact.surname}</p>
                     <p>Phone: {contact.phone}</p>
                 </div>
                )
             : (<ListItemText
                    primary={`${contact.name} ${contact.surname} - ${contact.phone}`}
                />)
            }
          </Link>
      </ListItem>
  );
}

export default ContactsListItem;
