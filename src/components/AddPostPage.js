import React from 'react';
import PostForm from './PostForm';

const AddPostPage = () => {
    return (
        <div>
            <PostForm actionType={"ADD_POST"}/>
        </div>
    );
}

export default AddPostPage;