import React, {useState, useContext} from 'react';
import BlogContext from '../context/blog-context';
import {useHistory} from 'react-router-dom';
import Modal from 'react-modal';

const PostForm = ({actionType='ADD_POST', post}) => {
    const [title, setTitle] = useState(post? post.title: '');
    const [content, setContent] = useState(post? post.content:'');
    const [keywords, setKeywords] = useState(post? post.keywords:'');
    const [isModalOpen, setModalOpen] = useState(false);
    const history = useHistory();
    const {dispatch} = useContext(BlogContext);

    return (
        <>
        <Modal 
            isOpen={isModalOpen}
            ariaHideApp={false}
            onRequestClose={()=>setModalOpen(false)}
        >
            <h1>Post Title and Post content should not be Empty!</h1>
            <button onClick={()=>setModalOpen(false)}>Okay, sorry</button>
        </Modal>
        <form 
            onSubmit={(e)=>{
                e.preventDefault();
                if(!title || !content){ 
                    setModalOpen(true)
                } else {
                    dispatch({
                        type: actionType,
                        post: {title,content,keywords}
                    });
                    history.push('/');
                }
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
        </>
    )
}

export default PostForm;