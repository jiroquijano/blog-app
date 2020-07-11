import React, { useContext, useState, useEffect } from 'react';
import Post from './Post';
import BlogContext from '../context/blog-context';
import paginate from '../selectors/pagination';

const PostsFeedPage = () =>{
    const {posts} = useContext(BlogContext);
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const totalNumberOfPages = Math.ceil(posts.length/postsPerPage) || page;
    
    useEffect(()=>{
        if(page > totalNumberOfPages) {
            setPage(totalNumberOfPages)
        }
    },[page,totalNumberOfPages]);

    const handlePostPerPageChange = (e) =>{
        setPostsPerPage(e.target.value);
    }

    const applySelectors = (rawPosts) =>{
        return paginate(rawPosts, +page, +postsPerPage);
    }

    return (
        <div>
            {`Viewing page ${page} of ${totalNumberOfPages}`}
            <p>posts per page: </p>
            <input 
                onChange={handlePostPerPageChange}
                type="number"
                value={postsPerPage}
                min={1}
                max={posts.length}
            />

            {page > 1 && (
                <button onClick={()=>setPage(page-1)}>
                    Prev
                </button>
            )}
            {page*postsPerPage < posts.length && (
                <button onClick={()=>setPage(page+1)}>
                    Next
                </button>
            )}

            {applySelectors(posts.map((post,index)=>(
                <Post
                    key={index}
                    post={post}
                />
            )))}
        </div>
    );
}

export default PostsFeedPage;