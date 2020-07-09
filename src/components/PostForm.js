import React from 'react';

const PostForm = () => {
    return (
        <form>
            <input type="text" placeholder="title"/>
            <textarea placeholder="tell me more"/>
            <button>Submit!</button>
        </form>
    )
}

export default PostForm;