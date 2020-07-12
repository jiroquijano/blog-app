const searchReducer = (search, action) =>{
    switch (action.type){
        case 'UPDATE_SEARCH':
            return action.search;
        default:
            return search;
    }
}

export default searchReducer;