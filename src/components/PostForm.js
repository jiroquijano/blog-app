import React, {useState, useContext} from 'react';
import BlogContext from '../context/blog-context';
import {useHistory} from 'react-router-dom';
import Modal from 'react-modal';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const PostForm = ({actionType='ADD_POST', post}) => {
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
        <form 
            onSubmit={onSubmitHandler}
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
            <SingleDatePicker
                date = {date}
                onDateChange = {onDateChange}
                focused = {calendarFocused}
                onFocusChange = {onFocusChange}
                id={"picker"}
                numberOfMonths = {1}
                isOutsideRange = {(day)=>false}
            />
            <button>Submit!</button>
        </form>
        </>
    )
}

export default PostForm;