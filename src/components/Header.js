import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import SearchBar from './SearchBar';
import {Row, Col} from 'react-bootstrap';

const Header = (props) =>{
    return (
        <div className="header-banner">
            <Row>
                <Col xs={12} md={3} lg={3}>
                    <div className="header-banner__title">
                        <h1>bl<FontAwesomeIcon icon="plus-circle"/>gs!</h1>
                    </div>
                </Col>
                <Col xs>
                    <div className="header-banner__link">
                        <NavLink 
                            activeClassName="header-banner__link--active"
                            to="/"
                            exact
                        >
                            <FontAwesomeIcon title="view posts" icon="home"/>
                        </NavLink>
                    </div>
                </Col>
                <Col xs>
                    <div  className="header-banner__link">
                        <NavLink 
                            activeClassName="header-banner__link--active"
                            to="/add"
                        >
                            <FontAwesomeIcon title="Create a new post" icon="plus-circle"/>
                        </NavLink>
                    </div>
                </Col>
                <Col xs md={4} lg={4}>
                    <SearchBar/>
                </Col>
            </Row>
            <Row>
            </Row>
        </div>
    );
}

export default Header;