import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">{props.aboutText}</Link>
      </li>

    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode}  role="switch"  type="checkbox" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>

    {/* <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleRed}  role="switch"  type="checkbox" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
    </div>

    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleGreen}  role="switch"  type="checkbox" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
    </div> */}

  </div>
</nav>
    </div>
  )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText:PropTypes.string
}
