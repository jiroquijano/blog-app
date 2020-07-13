import React, {useContext,useState} from 'react';
import BlogContext from '../context/blog-context'
import moment from 'moment';
import {Link} from 'react-router-dom';
import DeleteConfirmationModal from './modals/DeleteConfirmationModal';
import {useHistory} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap';

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
                        <>
                            <Jumbotron>
                                <Container className="post-view-container">
                                    <h1 className="post-view-container__title">{currentPost.title}</h1>
                                    <h6 className="post-view-container__date">
                                        posted on: {moment(currentPost.date).format('MMMM DD, YYYY')}
                                    </h6>
                                    <div className="post-view-container__content" dangerouslySetInnerHTML={
                                        {__html: currentPost.content}
                                    }/>
                                </Container>
                                    <Link to={`/edit/${currentPost.id}`}>Edit</Link>
                                    <button onClick={()=>setModalOpen(true)}>Delete</button>
                            </Jumbotron>
                            <DeleteConfirmationModal
                                isModalOpen={isModalOpen}
                                setModalOpen={setModalOpen}
                                handleDelete={handleDelete}
                            />
                        </>
                    ) : ''
                }
            </>
    );
}

export default PostViewPage;