const searchFilter = (posts, searchString) =>{
    return posts.filter((post)=>{
        return searchString.split(',').some((search)=>{
            return post.title.includes(search) ||
            post.content.includes(search) ||
            post.keywords.includes(search);
        });
    });
};

export default searchFilter;