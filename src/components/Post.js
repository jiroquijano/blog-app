import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import BlogContext from '../context/blog-context';

const Post = ({post}) =>{
    const {dispatch} = useContext(BlogContext);
    
    const handleDelete = () =>{
        dispatch({
            type: 'REMOVE_POST',
            id: post.id
        })
    };

    return (
        <div>
            <h2>{post.title}</h2>
            <Link to={`/view/${post.id}`}>View</Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
};

export default Post;