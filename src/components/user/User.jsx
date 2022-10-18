import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const User = ({ user }) => {
    return (
            <ListItem style={{maxWidth: '33%'}} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {user.car}
                            </Typography>
                            <span style={{margin: '10px'}}></span>
                            {user.country}
                        </React.Fragment>
                    }
                />
                <Divider variant="inset" component="li" />
            </ListItem>
    );
};

export default User;