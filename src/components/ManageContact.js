import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../features/contact/contactActions';
import DisplayContact from './DisplayContact';



const ManageContact = () => {
  const dispatch = useDispatch();
  const {allContacts, gettingAllContacts, getContactsError} = useSelector((state) => state.contact);
  useEffect(() => {
    dispatch(getContacts());
  }, [])
  return (
    <>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Locations</th>
      <th scope="col">Tags</th>
      <th scope='col'>Actions</th>

    </tr>
  </thead>
  <tbody>

    {
      getContactsError && <div class="alert alert-dismissible alert-danger">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <strong>Oh snap!</strong> <a href="#" class="alert-link"></a> Something went wrong
    </div>
    }
    
    {!gettingAllContacts ?
      allContacts.map((contact, index) => {
        return <DisplayContact contact={contact} key={index} cName={index%2 ? "table-light" : "table-light"}/>
      }) : <div>Loading...</div>
    }  
    </tbody>
    </table>

    

    

    </>
  )
}

export default ManageContact