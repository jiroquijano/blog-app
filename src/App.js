import React, { useReducer, useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/App.css';
import PostsFeedPage from './components/PostsFeedPage';
import PostViewPage from './components/PostViewPage';
import Header from './components/Header';
import BlogContext from './context/blog-context';
import postReducer from './reducers/postReducers';
import AddPostPage from './components/AddPostPage';

function App() {

  const [posts,dispatch] = useReducer(postReducer, []);
  
  useEffect(()=>{
    const initial = [{title:'jiroooo', content:'sample content', keywords:'keywooooord'}];
    localStorage.setItem("posts", JSON.stringify(initial)); //temporary
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [{title:'jiropost', content: 'sample', keywords:'keyword'}];
    dispatch({
      type: 'POPULATE_POSTS',
      posts: storedPosts
    });
  },[]);

  return (
    <BlogContext.Provider value={{posts,dispatch}}>
      <Header/>
      <BrowserRouter>
        <Route path='/' exact component={PostsFeedPage}/>
        <Route path='/add' component={AddPostPage}/>
        <Route path='/view/:id' test={'hello'} component={PostViewPage}/>
      </BrowserRouter>
    </BlogContext.Provider>
  );
}

export default App;
