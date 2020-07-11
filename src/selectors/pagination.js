const paginate = (posts, pageNumber, postsPerPage=5) => {
    const startIndex = (pageNumber-1)*postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex,endIndex);
}

export default paginate;