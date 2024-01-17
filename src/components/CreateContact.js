import React, { useEffect, useState } from 'react'
import { ReactTags } from 'react-tag-autocomplete';
import TagsInput from './TagsInput';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../features/contact/contactActions';
import { Link, useNavigate } from 'react-router-dom';



const CreateContact = () => {
    // const [locations, setLocations] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [tags, setTags] = useState([]);

    // const [created, setCreated] = useState(false);

    const dispatch = useDispatch();
    const {creatingContact, createContactError,contacts} = useSelector((state) => state.contact)
    const navigate = useNavigate();
    

    

    const selectedTags = (tags) => {
        setTags(tags);
    }


    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createContact({email, firstName, lastName, phoneNo, tags}, navigate));

        
    }

    useEffect(() => {
      if(contacts){
        setEmail("")
        setFirstName("")
        setLastName("")
        setPhoneNo("")
        setTags([]);
      }
    }, [contacts])


    
  return (
    <form>
  <fieldset>
    <legend>Create Contact</legend>
    <div className="form-group">
      <label for="exampleInputFirstName1" className="form-label mt-4">First Name *</label>
      <input type="text" className="form-control" id="exampleInputFirstName1"  placeholder="Enter First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <div className="form-group">
      <label for="exampleInputLastName1" className="form-label mt-4">Last Name *</label>
      <input type="text" className="form-control" id="exampleInputLastName1" placeholder="Enter Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <div className="form-group">
      <label for="exampleInputEmail1" className="form-label mt-4">Email *</label>
      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <div className="form-group">
      <label for="exampleInputPhoneNumber1" className="form-label mt-4">Phone Number *</label>
      <input type="text" className="form-control" id="exampleInputPhoneNumber1" placeholder="Enter Phone Number"value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value)}}/>
      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <div className="form-group">
      <label for="exampleInputTag1" className="form-label mt-4">Enter Tags</label>
      <TagsInput tags={tags} selectedTags={selectedTags}/>
    </div>

    <button type="button" className="btn btn-outline-primary" onClick={handleCreate}>Create</button>
    

    
    

    
    </fieldset>

    {creatingContact && <div className="alert alert-dismissible alert-primary">
  <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
  <strong></strong> <a href="#" className="alert-link"></a>Creating Contact
</div>}
{
    createContactError && <div className="alert alert-dismissible alert-danger">
    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    <strong>Oh snap!</strong> <a href="#" className="alert-link"></a>{createContactError}
  </div>
}
{/* {
    !createContactError && !creatingContact && <div className="alert alert-dismissible alert-success">
    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    <strong>Contact Created</strong> You successfully read <Link to="/contact/manage" className="alert-link">You can see here</Link>.
  </div>
} */}
    </form>
  )
}

export default CreateContact