import React, {useContext} from 'react';
import BlogContext from '../context/blog-context';
import PostsFeed from './PostsFeed';

const DashboardPage = (props) =>{
    const {posts} = useContext(BlogContext);
    return (
        <div>
            <PostsFeed posts={posts}/>
        </div>
    )
}

export default DashboardPage;
