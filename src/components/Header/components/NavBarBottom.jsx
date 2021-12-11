import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { OPEN_MODAL_CART, OPEN_MODAL_SEARCH } from "../../../store/type";

export function NavBarBottom() {
  const { user } = useSelector((store) => store.auth);
  const { listCart, cartCount } = useSelector((store) => store.cart);
  const { widhlist } = useSelector((store) => store.product);

  // console.log(`cartCount`, cartCount)

  const dispatch = useDispatch();


  // const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {
  //   let count = 0;
  //   listCart.forEach((item) => {
  //     console.log("item", item)
  //     count += item.number;
  //   });
  //   setCartCount(count);
  // }, [listCart, cartCount]);


  const openModalCart = () => {
   
    let div = document.createElement('div');
    div.classList.add('modal-backdrop','fade','show');

    document.body.appendChild(div)
    document.querySelector("body").classList.add("modal-open");
  };

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
            <li className="nav-item dropdown">
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
              <Link className="nav-link" data-toggle="dropdown"  to="#">
                Pages
              </Link>
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
                        <Link className="list-styled-link" to="/contact">
                          Contact Us
                        </Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="/store">
                          Store Locator
                        </Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="/faql">
                          FAQ
                        </Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="/coming-soon">
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
              <Link className="nav-link" data-toggle="dropdown" to="#">
                Blog
              </Link>
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
                        <Link className="list-styled-link" to="/blog-post">
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
                onClick={(e) => (
                  e.preventDefault(),
                  dispatch({ type: OPEN_MODAL_SEARCH }),
                  openModalCart()
                )}
              >
                <i className="fe fe-search" />
              </Link>
            </li>

            <li className="nav-item ml-lg-n4">
              {!user ? (
                <Link className="nav-link" to="/auth">
                  <i className="fe fe-user" />
                </Link>
              ) : (
                <Link className="nav-link" to="/auth">
                  <i className="fas fa-user-circle" />
                </Link>
              )}
            </li>

            <li className="nav-item ml-lg-n4">
              {
                widhlist.length <= 0 ?(
                  <Link className="nav-link" to="/account/account-wishlist">
                    <i className="fe fe-heart" />
                  </Link>
                ) : (
                  <Link className="nav-link" to="/account/account-wishlist">
                    <i class="fas fa-heart"/>
                  </Link>
                )
              }
              
            </li>
            <li className="nav-item ml-lg-n4">
              <Link
                className="nav-link"
                data-toggle="modal"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: OPEN_MODAL_CART });
                  openModalCart();
                }}
              >
                <span data-cart-items={cartCount}>
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
