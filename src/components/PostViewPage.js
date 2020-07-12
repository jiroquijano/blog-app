import React, {useContext,useState} from 'react';
import BlogContext from '../context/blog-context'
import moment from 'moment';
import {Link} from 'react-router-dom';
import {Modal,Button} from 'react-bootstrap';
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
                            <div dangerouslySetInnerHTML={{__html: currentPost.content}}/>
                            <h4>{moment(currentPost.date).format('MMMM DD, YYYY')}</h4>
                            <Link to={`/edit/${currentPost.id}`}>Edit</Link>
                            <button onClick={()=>setModalOpen(true)}>Delete</button>
                            <Modal
                                show={isModalOpen}
                                onHide={()=>setModalOpen(false)}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Delete Confirmation</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure you want to delete this post?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={()=>setModalOpen(false)}>...maybe not</Button>
                                    <Button variant="primary" onClick={handleDelete}>yes</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    ) : ''
                }
            </>
    );
}

export default PostViewPage;