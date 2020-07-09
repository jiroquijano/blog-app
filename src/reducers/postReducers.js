const postReducer = (state, action)=>{
    switch (action.type){
        case 'POPULATE_POSTS':
            return action.posts;
        case 'ADD_POST':
            return [
                ...state,
                action.post
            ]
        default:
            return state;
    }
}

export default postReducer;