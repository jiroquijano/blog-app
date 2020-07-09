import React from 'react';

const PostViewPage = (props) => {
    return (
        <div>
            {`viewing post: ${props.match.params.id}`}
        </div>
    );
}

export default PostViewPage;