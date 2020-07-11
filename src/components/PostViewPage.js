import React, {useContext} from 'react';
import BlogContext from '../context/blog-context'
import moment from 'moment';
import {Link} from 'react-router-dom';

const PostViewPage = (props) => {
    const {posts} = useContext(BlogContext);
    const currentPost = posts.find(post=>post.id === props.match.params.id);
    return (
            <>
                {
                    currentPost ? (
                        <div>
                            <h1>{currentPost.title}</h1>
                            <h2>{currentPost.content}</h2>
                            <h4>{moment(currentPost.date).format('MMMM DD, YYYY')}</h4>
                            <Link to={`/edit/${currentPost.id}`}>Edit</Link>
                            <button>Remove</button>
                        </div>
                    ) : ''
                }
            </>
    );
}

export default PostViewPage;