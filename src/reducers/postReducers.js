const postReducer = (state, action)=>{
    switch (action.type){
        case 'POPULATE_POSTS':
            return action.posts;
        case 'ADD_POST':
            return [
                ...state,
                {   
                    ...action.post,
                    id: state.length || 0
                }
            ]
        case 'REMOVE_POST':
            return state.filter(post=>post.id !== action.id);
        default:
            return state;
    }
}

export default postReducer;