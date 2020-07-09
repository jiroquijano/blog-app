import React from 'react';

const Post = ({post}) =>{
    return (
        <div>
            <h1>{post.title}</h1>
            <h3>{post.content}</h3>
            <h6>{post.keywords}</h6>
            <button>View</button>
            <button>Delete</button>
        </div>
    )
};

export default Post;