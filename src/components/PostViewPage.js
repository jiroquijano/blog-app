import React, {useContext,useState} from 'react';
import BlogContext from '../context/blog-context'
import moment from 'moment';
import {Link} from 'react-router-dom';
import DeleteConfirmationModal from './modals/DeleteConfirmationModal';
import {useHistory} from 'react-router-dom';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
                            <Jumbotron fluid>
                                <Container className="post-view-container">
                                    <h1 className="post-view-container__title">{currentPost.title}</h1>
                                    <h6 className="post-view-container__date">
                                        posted on: {moment(currentPost.date).format('MMMM DD, YYYY')}
                                    </h6>
                                    <div className="post-view-container__content" dangerouslySetInnerHTML={
                                        {__html: currentPost.content}
                                    }/>
                                </Container>
                                <Container>
                                    <Row>
                                        <Col  className="post-view-footer"
                                            lg={{span:3, offset:10}}
                                            md={{span:3, offset:10}}
                                            s={{span:3, offset:10}}
                                            xs={{span:5, offset:4}}
                                        >
                                            <Link to={`/edit/${currentPost.id}`}>
                                                <FontAwesomeIcon className="post-view-footer__icon"
                                                    icon="edit"
                                                />
                                            </Link>
                                            <FontAwesomeIcon className="post-view-footer__icon"
                                                icon="trash-alt"
                                                onClick={()=>setModalOpen(true)}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
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