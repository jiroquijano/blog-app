import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>{
    return (
        <div>
            <h1>Blog Application</h1>
            <Link to="/">Home</Link>
            <Link to="/add">New post</Link>
        </div>
    );
}

export default Header;