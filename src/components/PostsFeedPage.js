import React, { useContext } from 'react';
import Post from './Post';
import BlogContext from '../context/blog-context';

const PostsFeedPage = () =>{
    const {posts} = useContext(BlogContext);
    return (
        <div>
            {posts.map((post,index)=>(
                <Post
                    key={index}
                    post={post}
                />
            ))}
        </div>
    );
}

export default PostsFeedPage;