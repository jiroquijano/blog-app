import React, {useState, useContext} from 'react';
import BlogContext from '../context/blog-context';

const PostForm = ({actionType='ADD_POST', post}) => {
    const [title, setTitle] = useState(post? post.title: '');
    const [content, setContent] = useState(post? post.content:'');
    const [keywords, setKeywords] = useState(post? post.keywords:'');
    const {dispatch} = useContext(BlogContext);

    return (
        <form 
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch({
                    type: actionType,
                    post: {title,content,keywords}
                })
            }}
        >
            <input
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                type="text"
                value={title}
                placeholder="title"
            />
            <textarea
                onChange={(e)=>{
                    setContent(e.target.value);
                }} 
                value={content}
                placeholder="tell me more"
            />
            <input
                onChange={(e)=>{
                    setKeywords(e.target.value);
                }}
                type="text"
                placeholder="keywords"
                value={keywords}
            />
            <button>Submit!</button>
        </form>
    )
}

export default PostForm;