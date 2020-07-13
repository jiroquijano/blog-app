import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import BlogContext from '../context/blog-context';
import {Modal,Button,Card,Container,Row, Col} from 'react-bootstrap';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
                <Container className="post-item__options">
                    <Row>
                        <Col 
                            md={{span:3, offset: 9}}
                            lg={{span:2, offset:10}}
                        >
                            <Link to={`/view/${post.id}`}>
                                <FontAwesomeIcon 
                                    className="post-item__options__item"
                                    icon="eye"
                                />
                            </Link>
                            <FontAwesomeIcon
                                className="post-item__options__item"
                                icon="trash-alt" onClick={()=>setModalOpen(true)}
                            />
                        </Col>
                    </Row>
                </Container>
            </Card>

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
    )
};

export default Post;