import React, {useState, useEffect } from 'react';
import Post from './Post';
import paginate from '../selectors/pagination';
import sortBy from '../selectors/sorting';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Modal,Button} from 'react-bootstrap';

const PostsFeedPage = ({posts}) =>{
    const [page, setPage] = useState(1);
    const [isModalOpen, setModalOpen] = useState(false);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const [sortOption, setSortOption] = useState('date');
    const totalNumberOfPages = Math.ceil(posts.length/postsPerPage) || page;
    
    useEffect(()=>{
        if(page > totalNumberOfPages) {
            setPage(totalNumberOfPages)
        }
    },[page,totalNumberOfPages]);

    const handlePostPerPageChange = (e) =>{
        setPostsPerPage(e.target.value);
    }

    const applySelectors = () =>{
        const sortedPosts = sortBy(posts, sortOption);
        const paginatedAndSortedPosts =  paginate(sortedPosts, +page, +postsPerPage);
        return paginatedAndSortedPosts;
    }

    return (
        <div>
            sort by:
            <select
                onChange={(e)=>{
                    setSortOption(e.target.value);
                }}
            >
                <option>date</option>
                <option>title</option>
            </select>

            {applySelectors().map((post,index)=>(
                <Post
                    key={index}
                    post={post}
                />
            ))}

            {`Viewing page ${page} of ${totalNumberOfPages}     `}
            <FontAwesomeIcon onClick={()=>setModalOpen(true)} icon="cog"/>
            
            <div>
                {page > 1 && (
                    <button onClick={()=>setPage(page-1)}>
                        Prev
                    </button>
                )}
                {page*postsPerPage < posts.length && (
                    <button onClick={()=>setPage(page+1)}>
                        Next
                    </button>
                )}
            </div>

            <Modal
                show={isModalOpen}
                onHide={()=>setModalOpen(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Pagination Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    posts per page:
                    <input 
                        onChange={handlePostPerPageChange}
                        type="number"
                        value={postsPerPage}
                        min={1}
                        max={posts.length}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        onClick={()=>setModalOpen(false)}
                        variant="primary"
                    >
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default PostsFeedPage;