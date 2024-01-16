import React, { useState } from 'react'
import { GoPencil } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import DeleteConfirmation from './DeleteModel';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../features/contact/contactActions';

const DisplayContact = ({contact, cName}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    }


  return (  
    <>
    <tr className={cName}>
      <th scope="row">{contact?.name}</th>
      <td>{contact?.email}</td>
      <td>{contact?.phoneNo}</td>
      <td>Ahmedabad</td>
      <td>{contact.tags.join(" ")}</td>
      <button style={{border: "none", background: "none"}}> <GoPencil style={{cursor: 'pointer'}}/></button>
      <button onClick={handleShow} style={{cursor: "pointer", border: "none", background: "none"}}><MdOutlineDelete /></button>
    </tr>
    <DeleteConfirmation showModal={show} hideModal={handleClose} id={[contact.contactId, contact.brandId]} message={"Are you sure you want to delete the selected contact? This cannot be undone."}/>

    
    
    </>


  )
}

export default DisplayContact