import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={"/home"} className="navbar-brand">Header</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to={"/home"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/user/" + 5} className="nav-link">User</Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}
