import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";



const Header = () => {

    return (
            <Box className='box-header'  sx={{
                p: 2,
                backgroundColor: 'primary.dark',
            }}>
                <div className='box-header'>
                    <Link to={"/contacts"}>Contacts</Link>
                    <Link to={"/users"}>Users</Link>
                    <Link to={"/posts"}>Posts</Link>
                </div>
            </Box>
    );
};

export default Header;
