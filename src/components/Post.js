import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import BlogContext from '../context/blog-context';
import Modal from 'react-modal';
import moment from 'moment';

const Post = ({post}) =>{
    const {dispatch} = useContext(BlogContext);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleDelete = () =>{
        dispatch({
            type: 'REMOVE_POST',
            id: post.id
        });
        setModalOpen(false);
    };

    return (
        <div>
            <h2>{post.title}</h2>
            <h4>{moment(post.date).format('MMMM DD, YYYY')}</h4>
            <Link to={`/view/${post.id}`}>View</Link>
            <button onClick={()=>setModalOpen(true)}>Delete</button>
            <Modal 
                isOpen={isModalOpen}
                onRequestClose={()=>setModalOpen(false)}
                ariaHideApp={false}
            >
                <h1>Delete post?</h1>
                <button onClick={()=>setModalOpen(false)}>Cancel</button>
                <button onClick={handleDelete}>Confirm</button>
            </Modal>
        </div>
    )
};

export default Post;