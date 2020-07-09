import React, { useReducer, useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/App.css';
import PostsFeedPage from './components/PostsFeedPage';
import PostViewPage from './components/PostViewPage';
import Header from './components/Header';
import BlogContext from './context/blog-context';
import postReducer from './reducers/postReducers';

function App() {

  const [posts,dispatch] = useReducer(postReducer, []);
  
  useEffect(()=>{
    const initial = [{title:'jiroooo', content:'sample content', keywords:'keywooooord'}];
    localStorage.setItem("posts", JSON.stringify(initial));
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [{title:'jiropost', content: 'sample', keywords:'keyword'}];
    dispatch({
      type: 'POPULATE_POSTS',
      posts: storedPosts
    });

    dispatch({
      type: 'ADD_POST',
      post: {title:'bonna', content: 'ganda', keywords:'prehti'}
    });
  },[]);

  return (
    <BlogContext.Provider value={{posts,dispatch}}>
      <Header/>
      <BrowserRouter>
        <Route path='/' exact component={PostsFeedPage}/>
        
        <Route path='/view/:id' test={'hello'} component={PostViewPage}/>
      </BrowserRouter>
    </BlogContext.Provider>
  );
}

export default App;
