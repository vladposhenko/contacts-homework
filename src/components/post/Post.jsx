import React from 'react';
import './post.css'
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

const Post = ({ post }) => {
    const navigate = useNavigate()
    return (
            <div className="posts__item"
                 style={{display: 'flex', flexDirection:'column', alignItems: 'center', width:'32%'}}
                 onClick={() => navigate('/posts/' + post.id)}
            >

                <img style={{width: '100%'}} src={post.image} alt=""/>
                <div style={{width: '400px'}}>
                    <h3>{post.title}</h3>
                </div>
            </div>
    );
};

export default Post;