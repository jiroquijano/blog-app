import {v4 as uuidv4} from 'uuid';

const postReducer = (state, action)=>{
    switch (action.type){
        case 'POPULATE_POSTS':
            return action.posts;
        case 'ADD_POST':
            let newState = [...state];
            if(action.post) {
                newState = [
                    ...state,
                    {
                        ...action.post,
                        id: uuidv4()
                    }
                ]
                localStorage.setItem("posts", JSON.stringify(newState));
            }
            return newState;
        case 'REMOVE_POST':
            const postsAfterRemove = state.filter(post=>post.id !== action.id);
            localStorage.setItem("posts", JSON.stringify(postsAfterRemove));
            return postsAfterRemove;
        default:
            return state;
    }
}

export default postReducer;