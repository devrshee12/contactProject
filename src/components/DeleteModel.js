import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../features/contact/contactActions';

const DeleteConfirmation = ({ showModal, hideModal, id, message }) => {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
        console.log("here in handle delete in component id is : ", id);
        hideModal();
    }   

    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DeleteConfirmation;