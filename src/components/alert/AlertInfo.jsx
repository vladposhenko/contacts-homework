import React from 'react';
import {Alert} from "@mui/material";

const AlertInfoStyle = {
    position: 'absolute',
    right: '18%',
    top: "15%"
}

const AlertInfo = ({ message }) => {
    return (
        <div style={AlertInfoStyle}>
            <Alert>{message}</Alert>
        </div>
    );
};

export default AlertInfo;