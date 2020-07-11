import React, {useContext} from 'react';
import PostForm from './PostForm';
import BlogContext from '../context/blog-context';

const EditPostPage = (props)=>{
    const {posts} = useContext(BlogContext);
    const post = posts.find(curr=>curr.id === props.match.params.id);
    return (
        <div>
            <PostForm actionType={'EDIT_POST'} post={post}/>
        </div>
    );
}

export default EditPostPage;