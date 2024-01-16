import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Contact</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          {/* <li className="nav-item">
            <a className="nav-link active" href="#">Create
              <span className="visually-hidden">(current)</span>
            </a>
          </li> */}
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Create</a> */}
            <Link to="/contact/create" className='nav-link'> Create </Link>
          </li>
          <li className="nav-item">
          <Link to="/contact/manage" className='nav-link'> Manage </Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li> */}
          
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-sm-2" type="search" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  <section>
        <Outlet/>
  </section>  
    </>
  );
}

export default App;
