import React from 'react';
import useUsers from "../../hooks/useUsers";
import User from "../user/User";
import List from "@mui/material/List";
import Loader from "../loader/Loader";

const Users = () => {
    const { refresh, users, isLoading } = useUsers()
    console.log(users)
    console.log(isLoading)
    return (
        <List style={{display: 'flex', flexWrap: 'wrap'}}>
            {isLoading
            ? <Loader/>
            : users.map(u => <User key={u.id} user={u}/>)}
        </List>
    );
};

export default Users;