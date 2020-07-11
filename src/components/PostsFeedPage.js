import React, { useContext, useState, useEffect } from 'react';
import Post from './Post';
import BlogContext from '../context/blog-context';
import paginate from '../selectors/pagination';
import sortBy from '../selectors/sorting';

const PostsFeedPage = () =>{
    const {posts} = useContext(BlogContext);
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [sortOption, setSortOption] = useState('date');
    const totalNumberOfPages = Math.ceil(posts.length/postsPerPage) || page;
    
    useEffect(()=>{
        if(page > totalNumberOfPages) {
            setPage(totalNumberOfPages)
        }
    },[page,totalNumberOfPages]);

    const handlePostPerPageChange = (e) =>{
        setPostsPerPage(e.target.value);
    }

    const applySelectors = () =>{
        const sortedPosts = sortBy(posts, sortOption);
        const paginatedAndSortedPosts =  paginate(sortedPosts, +page, +postsPerPage);
        return paginatedAndSortedPosts.map((post,index)=>(
            <Post
                key={index}
                post={post}
            />
        ));
    }

    return (
        <div>
            {`Viewing page ${page} of ${totalNumberOfPages}`}
            <br/>
            posts per page:
            <input 
                onChange={handlePostPerPageChange}
                type="number"
                value={postsPerPage}
                min={1}
                max={posts.length}
            />
            <br/>
            <select
                onChange={(e)=>{
                    setSortOption(e.target.value);
                }}
            >
                <option>date</option>
                <option>title</option>
            </select>

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

            {applySelectors()}
        </div>
    );
}

export default PostsFeedPage;