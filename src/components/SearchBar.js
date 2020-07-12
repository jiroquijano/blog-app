import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import BlogContext from '../context/blog-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const SearchBar = () =>{
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();
    const {searchDispatch} = useContext(BlogContext);

    useEffect(()=>{
        if(!searchQuery) history.push('/');
    },[searchQuery,history]);

    return (
        <div className="search-bar">
            <FontAwesomeIcon 
                className="search-bar__icon"
                icon="search"
            />
            <input className="search-bar__input"
                onChange={(e)=>{
                    setSearchQuery(e.target.value);
                    searchDispatch({type: 'UPDATE_SEARCH', search: e.target.value});
                    history.push(`/search`);
                }}
                value={searchQuery}
                type="text"
                placeholder="search posts"
                title="separate different keywords with a comma (,)"
                name="input"
            />
        </div>
    )
}

export default SearchBar;