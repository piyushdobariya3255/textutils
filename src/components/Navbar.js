import React from 'react'
import propstypes from 'prop-types'
import './Apps.css'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`stiky navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.abouttext}</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="#">contect</Link>
          </li> */}
        
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className="d-flex">
          
        <div className="bg-primary rounded mx-2 " onClick={()=>props.toggleMode('primary')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div>

            <div className={`form-check m-3 form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
      <label className="form-check-label " htmlFor="flexSwitchCheckDefault"> toggle mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propstypes = {
     title:propstypes.string.isRequired,
     abouttext:propstypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'set title here',
    abouttext : 'aboutus'
    }                