import React, { useReducer, useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostViewPage from './components/PostViewPage';
import Header from './components/Header';
import BlogContext from './context/blog-context';
import postReducer from './reducers/postReducer';
import searchReducer from './reducers/searchReducer';
import AddPostPage from './components/AddPostPage';
import EditPostPage from './components/EditPostPage';
import SearchResultPage from './components/SearchResultsPage';
import DashboardPage from './components/DashboardPage';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  const [posts,dispatch] = useReducer(postReducer, []);
  const [searchString, searchDispatch] = useReducer(searchReducer, '');

  useEffect(()=>{
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    dispatch({
      type: 'POPULATE_POSTS',
      posts: storedPosts
    });  
  },[]);

  return (
    
      <BlogContext.Provider value={{posts,dispatch, searchString, searchDispatch}}>
        <BrowserRouter>
          <Container fluid>
            <Row className="header-row">
                <Header/>
            </Row>
          </Container>
          <Container className="main-content">
            <Row>
              <Col>
                <Switch>
                  <Route path='/' exact component={DashboardPage}/>
                  <Route path='/add' component={AddPostPage}/>
                  <Route path='/view/:id'component={PostViewPage}/>
                  <Route path='/edit/:id'component={EditPostPage}/>
                  <Route path='/search' component={SearchResultPage}/>
                </Switch>
              </Col>
            </Row>
          </Container>
        </BrowserRouter>
      </BlogContext.Provider>
  );
}

export default App;
