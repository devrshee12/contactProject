import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../features/contact/contactActions';
import DisplayContact from './DisplayContact';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from 'react-icons/fa';



const ManageContact = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("name");
  const [sortType, setSortType] = useState("ASC");
  const [cPage, setCPage] = useState(1);
  const [limit, setLimit] = useState(15)
  const [search, setSearch] = useState("");

  
  const {allContacts, gettingAllContacts, getContactsError, totalRecords, pageLimit, currPage, totalPages} = useSelector((state) => state.contact);
  useEffect(() => {
    dispatch(getContacts(sortBy, sortType, limit,cPage, search));
  }, [])

  useEffect(() => {
    dispatch(getContacts(sortBy, sortType, limit,cPage, search))
  }, [sortBy, sortType, limit, cPage, totalRecords])

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getContacts(sortBy, sortType, limit,cPage, search))
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  const handleSort = () => {
    if(sortType === "ASC"){
      setSortType("DESC")
    }
    else{
      setSortType("ASC");
    }
  }
  return (
    <>
    <form className="d-flex" style={{width:"500px", marginTop: "20px", marginBottom: "20px"}}>
        <input className="form-control me-sm-2" type="search" placeholder="Search" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
      </form>
    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th scope="col" onClick={handleSort} style={{cursor:"pointer"}}>Name {(sortType === "ASC") ? <FaCaretDown/> : <FaCaretUp/>}</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Locations</th>
      <th scope="col">Status</th>
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
    
    {!gettingAllContacts && allContacts ?
      allContacts.map((contact, index) => {
        return <DisplayContact contact={contact} key={index} cName={index%2 ? "table-light" : "table-light"}/>
      }) : <div>Loading...</div>
    }  
    </tbody>
    </table>
    <div>
  <ul class="pagination">
    <li class="page-item">
      <a class={`page-link ${(cPage === 1) && "disabled"}`} href="#" onClick={() => {
        if(cPage - 1 >= 1){
          setCPage(cPage - 1)
        }
      }}>&laquo;</a>
    </li>
    {
      new Array(totalPages).fill(null).map((_, i) => {
        return (
          <li class="page-item" onClick={() => {setCPage(i + 1)}}>
            <a class="page-link" href="#">{i + 1}</a>
          </li>
        )
      })
    }
    <li class={`page-item ${(cPage === totalPages) && "disabled"}`} onClick={() => {
      if(cPage + 1 <= totalPages){
        setCPage(cPage + 1);
      }
    }}>
      <a class="page-link" href="#">&raquo;</a>
    </li>
  </ul>
</div>

    

    

    </>
  )
}

export default ManageContact