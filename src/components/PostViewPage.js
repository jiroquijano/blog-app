import React from 'react';

const PostViewPage = (props) => {
    return (
        <div>
            {`${props.match.params.id} view ${props.test}`}
        </div>
    );
}

export default PostViewPage;