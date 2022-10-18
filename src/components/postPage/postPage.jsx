import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getPost} from "../../services/contactsService";
import Button from "@mui/material/Button";
import Loader from "../loader/Loader";

const PostPage = () => {
    const [post, setPost] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getPost(id).then((data) => {
            setPost(data)
        } );
    }, [id]);
    console.log(post)
    return (
        <div>
            <Button onClick={() => navigate('/posts')}  variant='contained'>Back to posts</Button>
            {post ?
                <div style={{display: 'flex', justifyContent:'space-between', gap:'20px', marginTop:'50px'}}>
                    <img src={post.image} alt=""/>
                    <div>
                        <h2>{post.title}</h2>
                        <p>Author: {post.author}</p>
                        <p>Publication date: {post.date}</p>
                        <p>{post.description}</p>
                    </div>
                </div>
                : <Loader/>
            }
        </div>
    );
};

export default PostPage;