import React, {useContext} from 'react';
import BlogContext from '../context/blog-context';
import PostsFeed from './PostsFeed';
import searchFilter from '../selectors/searchFilter';

const SearchResultsPage = (props) =>{
    const {posts,searchString} = useContext(BlogContext);
    return (
        <div>
            <PostsFeed posts={searchFilter(posts,searchString)}/>
        </div>
    )
}

export default SearchResultsPage;
