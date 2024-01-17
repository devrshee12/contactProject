import React, { useState } from 'react'
import { GoPencil } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import DeleteConfirmation from './DeleteModel';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../features/contact/contactActions';
import { useNavigate } from 'react-router-dom';

const DisplayContact = ({contact, cName}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {statusInfo: status} = contact;
    console.log("display status is : ", status);
    

    const handleUpdate = () => {
      navigate(`/contact/update/${contact.contactId}`)
    }


  return (  
    <>
    <tr className={cName}>
      <th scope="row">{contact?.name}</th>
      <td>{contact?.email}</td>
      <td>{contact?.phoneNo}</td>
      <td>Ahmedabad</td>
      <td><span class={`badge rounded-pill bg-${(status === "active") ? "success" : (status === "unsubscribed" ? "warning":"dark")}`}>{status}</span></td>
      <td>
      {
        contact.tags.map((tag) => {
          return(
            <span class="badge rounded-pill bg-info">{tag}</span>
          ) 
        })
      }
      </td>
      <button style={{border: "none", background: "none"}} onClick={handleUpdate}> <GoPencil style={{cursor: 'pointer'}}/></button>
      <button onClick={handleShow} style={{cursor: "pointer", border: "none", background: "none"}}><MdOutlineDelete /></button>
    </tr>
    <DeleteConfirmation showModal={show} hideModal={handleClose} id={[contact.contactId, contact.brandId]} message={"Are you sure you want to delete the selected contact? This cannot be undone."}/>

    
    
    </>


  )
}

export default DisplayContact