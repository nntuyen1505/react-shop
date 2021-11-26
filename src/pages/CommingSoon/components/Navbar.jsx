import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark @@classList">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            Shopper.
          </Link>
          {/* Nav */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#!">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li className="nav-item ml-n4">
              <Link className="nav-link" to="#!">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li className="nav-item ml-n4">
              <Link className="nav-link" to="#!">
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li className="nav-item ml-n4">
              <Link className="nav-link" to="#!">
                <i className="fab fa-medium" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}
