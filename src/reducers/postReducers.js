import {v4 as uuidv4} from 'uuid';

const postReducer = (state, action)=>{
    switch (action.type){
        case 'POPULATE_POSTS':
            return action.posts;
        case 'ADD_POST':
            if(action.post) {
                const newPostsState = [
                    ...state,
                    {
                        ...action.post,
                        id: uuidv4()
                    }
                ];
                localStorage.setItem("posts", JSON.stringify(newPostsState));
                return newPostsState;
            }else{
                return state;
            }
        case 'EDIT_POST':
            if(action.post) {
                const newPostsState = state.map(post=>{
                    if(action.post.id === post.id){
                        post = {...post, ...action.post};
                    }
                    return post;
                })
                localStorage.setItem("posts", JSON.stringify(newPostsState));
                return newPostsState;
            }else{
                return state;
            }
        case 'REMOVE_POST':
            const postsAfterRemove = state.filter(post=>post.id !== action.id);
            localStorage.setItem("posts", JSON.stringify(postsAfterRemove));
            return postsAfterRemove;
        default:
            return state;
    }
}

export default postReducer;