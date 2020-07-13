import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PageNavigation = ({posts, setSortOption, postsPerPage, setPostsPerPage, page, setPage}) =>{
    const [isModalOpen, setModalOpen] = useState(false);
    const totalNumberOfPages = Math.ceil(posts.length/postsPerPage) || page;
    
    useEffect(()=>{
        if(page > totalNumberOfPages) {
            setPage(totalNumberOfPages)
        }
    },[page,totalNumberOfPages,setPage]);

    const handlePostPerPageChange = (e) =>{
        setPostsPerPage(e.target.value);
    }

    return (
        <div className="page-navigation">
            <Container className="page-navigation__info">
                <Row>
                    <Col>
                        {`Viewing page ${page} of ${totalNumberOfPages}`}
                        <FontAwesomeIcon onClick={()=>setModalOpen(true)} icon="cog"/>
                    </Col>
                </Row>
            </Container>
            <Container className="page-navigation__buttons">
                <Row>
                    <Col lg={{span:1, offset:0}}>
                        {page > 1 && (
                            <div className="page-navigation__buttons">
                                <FontAwesomeIcon 
                                    onClick={()=>setPage(page-1)}
                                    icon="chevron-circle-left"
                                />
                            </div>
                        )}
                    </Col>
                    <Col lg={{span:1, offset:10}}>
                        {page*postsPerPage < posts.length && (
                            <div className="page-navigation__buttons">
                                <FontAwesomeIcon
                                    onClick={()=>setPage(page+1)}
                                    icon="chevron-circle-right"
                                />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>

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
                <div>
                    posts per page:
                    <input 
                        onChange={handlePostPerPageChange}
                        type="number"
                        value={postsPerPage}
                        min={1}
                        max={posts.length}
                    />
                </div>
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
                </div>  
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

export default PageNavigation;