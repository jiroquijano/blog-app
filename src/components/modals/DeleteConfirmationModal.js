import React from 'react';
import {Modal, Button} from 'react-bootstrap'

const DeleteConfirmationModal = ({isModalOpen, setModalOpen, handleDelete}) =>{
    return (
        <>
            <Modal
                show={isModalOpen}
                onHide={()=>setModalOpen(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setModalOpen(false)}>...maybe not</Button>
                    <Button variant="primary" onClick={handleDelete}>yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteConfirmationModal;