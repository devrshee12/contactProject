import React, { useEffect, useState } from 'react'
import { ReactTags } from 'react-tag-autocomplete';
import TagsInput from './TagsInput';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, getSpecificContact, updateSpecificContact } from '../features/contact/contactActions';
import { Link, useNavigate, useParams } from 'react-router-dom';



const UpdateContact = () => {
    // const [locations, setLocations] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [tags, setTags] = useState([]);

    const {contactId} = useParams();

    const dispatch = useDispatch();
    const {updatingSpecificContact, updateSpecificError} = useSelector((state) => state.contact)
    const navigate = useNavigate();
    const {specificContact, gettingSpecificContact} = useSelector((state) => state.contact);

    useEffect(() => {
      dispatch(getSpecificContact(contactId))


      console.log("first useEffect : ", specificContact);
      
      
      
    }, [])


    useEffect(() => {
      console.log("here in specificContact : ", specificContact?.tags)
      setEmail(specificContact?.email)
      setFirstName(specificContact?.firstName)
      setLastName(specificContact?.lastName)
      setPhoneNo(`+${specificContact?.countryCode}${specificContact?.phoneNo}`)
      setTags(specificContact?.tags)
    }, [specificContact])

    // useEffect(() => {
    //   console.log('rendering updatecontact: ',tags);
    // }, [tags])

    

    
    const selectedTags = (tags) => {
        setTags(tags);
    }


    


    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(updateSpecificContact({email, firstName, lastName, phoneNo, tags}, contactId, navigate))
    }


    
  return (
 <>
  {
    !gettingSpecificContact ? 

    <form>
  <fieldset>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <legend>Update Contact</legend>
    

    </div>
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
      <input type="text" className="form-control" id="exampleInputPhoneNumber1" placeholder="Enter Phone Number" value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value)}}/>
      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <div className="form-group">
      <label for="exampleInputTag1" className="form-label mt-4">Enter Tags</label>
      <TagsInput tags={tags} selectedTags={selectedTags}/>
    </div>
    <div style={{display:"flex", justifyContent:"space-between", width:"32%"}}>
    <button type="button" className="btn btn-outline-primary" onClick={handleUpdate}>Save Changes</button>
    <button type="button" className="btn btn-outline-danger" onClick={() => {navigate("/contact/manage")}}>Cancel</button>

    </div>
    

    
    

    
    </fieldset>

    {updatingSpecificContact && <div className="alert alert-dismissible alert-primary">
  <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
  <strong></strong> <a href="#" className="alert-link"></a>Updating Contact
</div>}
{
    updateSpecificError && <div className="alert alert-dismissible alert-danger">
    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    <strong>Oh snap!</strong> <a href="#" className="alert-link"></a>Something went Wrong
  </div>
}
{/* {
    !createContactError && !creatingContact && <div className="alert alert-dismissible alert-success">
    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    <strong>Contact Created</strong> You successfully read <Link to="/contact/manage" className="alert-link">You can see here</Link>.
  </div>
} */}
    </form> : <div>Loading...</div>
  }
 
 </>
  )
}

export default UpdateContact