import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class User extends Component {

  render () {
    const { match } = this.props
    return (
      <div>
        <h3>The User Page</h3>
        <p>User Id : {match.params.id}</p>
        <hr />
        <Link to="/home" className="nav-link">
          <button className="btn btn-primary">Go Home !</button>
        </Link>
      </div>
    )
  }
}
