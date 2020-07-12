import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const SearchBar = () =>{
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

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
                    history.push('/search');
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