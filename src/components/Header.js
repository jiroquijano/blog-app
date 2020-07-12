import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = (props) =>{
    return (
        <div>
            <h1>My Blog!</h1>
            <Link to="/">Home</Link>
            <Link to="/add">Create</Link>
            <SearchBar/>
        </div>
    );
}

export default Header;