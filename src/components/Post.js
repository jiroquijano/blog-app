import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import BlogContext from '../context/blog-context';
import {Card,Container,Row, Col} from 'react-bootstrap';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DeleteConfirmationModal from './modals/DeleteConfirmationModal'

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
            <Card className="post-item">
                <Card.Body>
                    <Card.Title><em>{post.title}</em></Card.Title>
                    <Card.Subtitle className="text-muted">
                        created on: {moment(post.date).format('MMMM DD, YYYY')}
                    </Card.Subtitle>
                </Card.Body>
                <Container className="post-item__footer">
                    <Row>
                        <Col 
                            md={{span:3, offset: 9}}
                            lg={{span:2, offset:10}}
                        >
                            <Link to={`/view/${post.id}`}>
                                <FontAwesomeIcon 
                                    className="post-item__footer__item"
                                    icon="eye"
                                />
                            </Link>
                            <FontAwesomeIcon
                                className="post-item__footer__item"
                                icon="trash-alt" onClick={()=>setModalOpen(true)}
                            />
                        </Col>
                    </Row>
                </Container>
            </Card>

            <DeleteConfirmationModal
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                handleDelete={handleDelete}
            />
        </div>
    )
};

export default Post;