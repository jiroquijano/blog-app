import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import BlogContext from '../context/blog-context';

const SearchBar = () =>{
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();
    const {searchDispatch} = useContext(BlogContext);

    useEffect(()=>{
        if(!searchQuery) history.push('/');
    },[searchQuery,history]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e)=>{
                    setSearchQuery(e.target.value);
                    searchDispatch({type: 'UPDATE_SEARCH', search: e.target.value});
                    history.push(`/search`);
                }}
                value={searchQuery}
                type="text"
                placeholder="search here"
                name="input"
            />
            <button>Search!</button>
        </form>
    )
}

export default SearchBar;