import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import BlogContext from '../context/blog-context';
import {SingleDatePicker} from 'react-dates';
import {Modal,Button, Container, Row, Col} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({actionType, post}) => {
    const id = post ? post.id: '';
    const [title, setTitle] = useState(post? post.title: '');
    const [content, setContent] = useState(post? post.content:'');
    const [keywords, setKeywords] = useState(post? post.keywords:'');
    const [date, setDate] = useState(post?moment(post.date):moment());

    const [calendarFocused, setCalendarFocused] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const history = useHistory();

    const {dispatch} = useContext(BlogContext);

    const onFocusChange = ({focused}) => {
        setCalendarFocused(focused);
    };

    const onDateChange = (date)=>{
        if(date) setDate(date);
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        if(!title || !content){ 
            setModalOpen(true)
        } else {
            dispatch({
                type: actionType,
                post: {id, title,content,keywords,date}
            });
            history.push('/');
        }
    };

    return (
        <>
            <Container>
                <form onSubmit={onSubmitHandler}>
                    <Row className="post-form__head">
                        <Col 
                            lg={10}
                            md={8}
                            xs={8}
                            s={10}
                        >
                            <input
                                className="post-form__input-title"
                                onChange={(e)=>setTitle(e.target.value)}
                                type="text"
                                value={title}
                                placeholder="what's new?"
                            />
                        </Col>
                        <Col
                            lg={2}
                            md={2}
                            xs={1}
                            s={1}
                        >
                            <SingleDatePicker
                                date = {date}
                                onDateChange = {onDateChange}
                                focused = {calendarFocused}
                                onFocusChange = {onFocusChange}
                                id={"picker"}
                                numberOfMonths = {1}
                                isOutsideRange = {(day)=>false}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <ReactQuill
                                className="post-form__input-content"
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                placeholder={"ooh, tell me more!"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col 
                            lg={{span:5, offset:8}}
                            md={{span:5, offset:8}}
                            s={{span:5, offset:5}}
                            xs={{span:7, offset:5}}
                        >
                            <input
                                className="post-form__input-keyword"
                                onChange={(e)=>setKeywords(e.target.value)}
                                type="text"
                                placeholder="keywords/hashtags go here"
                                value={keywords}
                            />
                            <button className="post-form__button">
                                <FontAwesomeIcon
                                    className="submit-icon"
                                    icon="check-circle"
                                />
                            </button>
                        </Col>
                    </Row>
                </form>
            </Container>
                <Modal
                    show={isModalOpen}
                    onHide={()=>setModalOpen(false)}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>You forgot something</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        title or content of the post cannot be empty
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={()=>setModalOpen(false)}>okay, sorry</Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}

export default PostForm;