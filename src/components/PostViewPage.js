import React, {useContext,useState} from 'react';
import BlogContext from '../context/blog-context'
import moment from 'moment';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom'

const PostViewPage = (props) => {
    const {posts,dispatch} = useContext(BlogContext);
    const currentPost = posts.find(post=>post.id === props.match.params.id);
    const [isModalOpen, setModalOpen] = useState(false);
    const history = useHistory();

    const handleDelete = () =>{
        dispatch({
            type: 'REMOVE_POST',
            id: currentPost.id
        });
        setModalOpen(false);
        history.push('/');
    };

    return (
            <>
                {
                    currentPost ? (
                        <div>
                            <h1>{currentPost.title}</h1>
                            <h2>{currentPost.content}</h2>
                            <h4>{moment(currentPost.date).format('MMMM DD, YYYY')}</h4>
                            <Link to={`/edit/${currentPost.id}`}>Edit</Link>
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
                    ) : ''
                }
            </>
    );
}

export default PostViewPage;