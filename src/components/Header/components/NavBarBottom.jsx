import React from "react";
import { Link, NavLink} from "react-router-dom";
import { useAuth } from "../../../hook/useAuth";

export function NavBarBottom() {
  let {toggleOpenSearch, toggleShoppingCart } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          Shopper.
        </Link>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* Nav */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown" >
              {/* Toggle */}
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              {/* Toggle */}
              <NavLink className="nav-link" to="/shop" exact>
                Shop
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              {/* Toggle */}
              <a className="nav-link" data-toggle="dropdown" to="#" >
                Pages
              </a>
              {/* Menu */}
              <div className="dropdown-menu">
                <div className="card card-lg">
                  <div className="card-body">
                    <ul className="list-styled font-size-sm">
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="list-styled-item">
                        <Link
                          className="list-styled-link"
                          to="/contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li className="list-styled-item">
                        <Link
                          className="list-styled-link"
                          to="/store"
                        >
                          Store Locator
                        </Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="/faql">
                          FAQ
                        </Link>
                      </li>
                      <li className="list-styled-item">
                        <Link
                          className="list-styled-link"
                          to="/coming-soon"
                        >
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              {/* Toggle */}
              <a className="nav-link" data-toggle="dropdown" to="#" >
                Blog
              </a>
              {/* Menu */}
              <div className="dropdown-menu">
                <div className="card card-lg">
                  <div className="card-body">
                    <ul className="list-styled font-size-sm">
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li className="list-styled-item">
                        <Link
                          className="list-styled-link"
                          to="/blog-post"
                        >
                          Blog Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="docs/getting-started.html">
                Docs
              </NavLink>
            </li>
          </ul>
          {/* Nav */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <Link
                className="nav-link"
                data-toggle="modal"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOpenSearch(true);
                }}
              >
                <i className="fe fe-search" />
              </Link>
            </li>
            <li className="nav-item ml-lg-n4">
              <Link className="nav-link" to="/auth">
                <i className="fe fe-user" />
              </Link>
            </li>
            <li className="nav-item ml-lg-n4">
              <Link className="nav-link" to="/account/account-wishlist">
                <i className="fe fe-heart" />
              </Link>
            </li>
            <li className="nav-item ml-lg-n4">
              <Link
                className="nav-link"
                data-toggle="modal"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleShoppingCart(true)
                }}
              >
                <span data-cart-items={2}>
                  <i className="fe fe-shopping-cart" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
