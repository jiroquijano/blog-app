import React, {useState} from 'react';
import Post from './Post';
import paginate from '../selectors/pagination';
import sortBy from '../selectors/sorting';
import PageNavigation from './PageNavigation';
import {Card, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const PostsFeedPage = ({posts}) =>{
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const [sortOption, setSortOption] = useState('date');

    const applySelectors = () =>{
        const sortedPosts = sortBy(posts, sortOption);
        const paginatedAndSortedPosts =  paginate(sortedPosts, +page, +postsPerPage);
        return paginatedAndSortedPosts;
    }

    return (
        <div className="posts-feed">
            {
                posts.length > 0 ? (
                    <>
                        <PageNavigation 
                            posts={posts}
                            page={page}
                            postsPerPage={postsPerPage}
                            setPage={setPage}
                            setSortOption={setSortOption}
                            setPostsPerPage={setPostsPerPage}
                        />
                        <div className="posts-feed__items">
                            {applySelectors().map((post,index)=>(
                                <Post
                                    key={index}
                                    post={post}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <Card className="post-item--first">
                            <Card.Body>
                                <Card.Title><em>Create a post!</em></Card.Title>
                                <Card.Subtitle className="text-muted">
                                    click add button below
                                </Card.Subtitle>
                            </Card.Body>
                                <Container className="post-item__footer">
                                    <Link className="post-item__add-button" to="/add">
                                        <FontAwesomeIcon title="Create a new post" icon="plus-circle"/>
                                    </Link>
                                </Container>
                        </Card>
                    </>
                )
            }

        </div>
    );
}

export default PostsFeedPage;