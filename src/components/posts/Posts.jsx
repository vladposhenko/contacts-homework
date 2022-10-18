import React from 'react';
import usePosts from "../../hooks/usePosts";
import Post from "../post/Post";
import Loader from "../loader/Loader";

const Posts = () => {
    const { posts, isLoading } = usePosts()
    console.log(posts)
    return (
        <>
            {isLoading
            ? <Loader/>
            :<div style={{ display:'flex', flexWrap:'wrap', gap:'20px' }}>
                    { posts.map(p => <Post key={p.id} post={p} />) }
                </div>
            }

        </>

    );
};

export default Posts;