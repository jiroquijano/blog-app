import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import BlogContext from '../context/blog-context';
import {SingleDatePicker} from 'react-dates';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import moment from 'moment';
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
        <Modal 
            isOpen={isModalOpen}
            ariaHideApp={false}
            onRequestClose={()=>setModalOpen(false)}
        >
            <h1>Post Title and Post content should not be Empty!</h1>
            <button onClick={()=>setModalOpen(false)}>Okay, sorry</button>
        </Modal>
        <form onSubmit={onSubmitHandler}>
            <input
                onChange={(e)=>setTitle(e.target.value)}
                type="text"
                value={title}
                placeholder="what's new?"
            />
            <SingleDatePicker
                date = {date}
                onDateChange = {onDateChange}
                focused = {calendarFocused}
                onFocusChange = {onFocusChange}
                id={"picker"}
                numberOfMonths = {1}
                isOutsideRange = {(day)=>false}
            />
            <ReactQuill theme="snow" value={content} onChange={setContent} placeholder={"oh, tell me more!"}/>
            <input
                onChange={(e)=>setKeywords(e.target.value)}
                type="text"
                placeholder="which hashtag/s (keywords) should we use?"
                value={keywords}
            />
            <br/>
            <button>Submit!</button>
        </form>
        </>
    )
}

export default PostForm;