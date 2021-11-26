import React from 'react'
import { Link } from 'react-router-dom'

export function SlideBar() {
    return (
        <div className="modal fixed-right fade" id="modalSidebar" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-vertical" role="document">
          <div className="modal-content">
            {/* Close */}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <i className="fe fe-x" aria-hidden="true" />
            </button>
            {/* Body */}
            <div className="modal-body px-10 my-auto">
              {/* Nav */}
              <ul className="nav nav-vertical nav-unstyled font-size-h2" id="sidebarNav">
                <li className="nav-item">
                  {/* Toggle */}
                  <Link className="nav-link dropdown-toggle" data-toggle="collapse" to="#sidebarHome">
                    Home
                  </Link>
                  {/* Collapse */}
                  <div className="collapse" id="sidebarHome" data-parent="#sidebarNav">
                    <ul className="list-styled font-size-lg py-3 mb-0">
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./index.html">Default</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./index-classic.html">Classic</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./index-fashion.html">Fashion</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./index-boxed.html">Boxed</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./index-simple.html">Simple</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./index-asymmetric.html">Asymmetric</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./index-sidenav.html">Sidenav</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./index-landing.html">Landing</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <Link className="nav-link dropdown-toggle" data-toggle="collapse" to="#sidebarCatalog">
                    Catalog
                  </Link>
                  {/* Collapse */}
                  <div className="collapse" id="sidebarCatalog" data-parent="#sidebarNav">
                    <div className="row">
                      <div className="col-12 py-3">
                        {/* Heading */}
                        <h6 className="mb-5 font-weight-bold">Clothing</h6>
                        {/* Links */}
                        <ul className="list-styled font-size-lg py-3">
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">All Clothing</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Blouses &amp; Shirts</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Coats &amp; Jackets</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Dresses</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Hoodies &amp; Sweats</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Denim</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Jeans</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Jumpers &amp; Cardigans</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Leggings</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 py-3">
                        {/* Heading */}
                        <h6 className="mb-5 font-weight-bold">Shoes &amp; Boots</h6>
                        {/* Links */}
                        <ul className="list-styled font-size-lg">
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">All Shoes &amp; Boots</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Branded Shoes</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Boots</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Heels</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Trainers</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Sandals</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Shoes</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Wide Fit Shoes</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 py-3">
                        {/* Heading */}
                        <h6 className="mb-5 font-weight-bold">Bags &amp; Accessories</h6>
                        {/* Links */}
                        <ul className="list-styled font-size-lg">
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">All Bags &amp; Accessories</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Accessories</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Bags &amp; Purses</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Luggage</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Belts</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Hats</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Hair Accessories</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Jewellery</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Travel Accessories</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <Link className="nav-link dropdown-toggle" data-toggle="collapse" to="#sidebarShop">
                    Shop
                  </Link>
                  {/* Collapse */}
                  <div className="collapse" id="sidebarShop" data-parent="#sidebarNav">
                    <div className="row">
                      <div className="col-12 py-3">
                        {/* Heading */}
                        <h6 className="mb-5">Shop</h6>
                        {/* Links */}
                        <ul className="list-styled font-size-lg">
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop.html">Default</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop-topbar.html">Topbar</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop-collapse.html">Collapse</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop-simple.html">Simple</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shop-masonry.html">Masonry</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 py-3">
                        {/* Heading */}
                        <h6 className="mb-5">Product</h6>
                        {/* Links */}
                        <ul className="list-styled font-size-lg">
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./product.html">Default</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./product-images-left.html">Images Left</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./product-image-grid.html">Image Grid</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./product-image-slider.html">Image Slider</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./product-images-stacked.html">Images Stacked</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 py-3">
                        {/* Heading */}
                        <h6 className="mb-5">Support</h6>
                        {/* Links */}
                        <ul className="list-styled font-size-lg">
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shopping-cart.html">Shopping Cart</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./checkout.html">Checkout</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./order-completed.html">Order Completed</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./shipping-and-returns.html">Shipping &amp; Returns</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 py-3">
                        {/* Heading */}
                        <h6 className="mb-5">Account</h6>
                        {/* Links */}
                        <ul className="list-styled font-size-lg">
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-order.html">Order</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-orders.html">Orders</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-wishlist.html">Wishlist</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-personal-info.html">Personal Info</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-address.html">Addresses</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-address-edit.html">Addresses: New</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-payment.html">Payment</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-payment-edit.html">Payment: New</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./account-payment-choose.html">Payment: Choose</Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" to="./auth.html">Auth</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 py-3">
                        {/* Heading */}
                        <h6 className="mb-5">Modals</h6>
                        {/* Links */}
                        <ul className="list-styled font-size-lg">
                          <li className="list-styled-item">
                            <Link className="list-styled-link" data-toggle="modal" to="#modalNewsletterHorizontal">
                              Newsletter: Horizontal
                            </Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" data-toggle="modal" to="#modalNewsletterVertical">
                              Newsletter: Vertical
                            </Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" data-toggle="modal" to="#modalProduct">
                              Product
                            </Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" data-toggle="modal" to="#modalSearch">
                              Search
                            </Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" data-toggle="modal" to="#modalShoppingCart">
                              Shopping Cart
                            </Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" data-toggle="modal" to="#modalSizeChart">
                              Size Chart
                            </Link>
                          </li>
                          <li className="list-styled-item">
                            <Link className="list-styled-link" data-toggle="modal" to="#modalWaitList">
                              Wait List
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <Link className="nav-link dropdown-toggle" data-toggle="collapse" to="#sidebarPages">
                    Pages
                  </Link>
                  {/* Collapse */}
                  <div className="collapse" id="sidebarPages" data-parent="#sidebarNav">
                    <ul className="list-styled font-size-lg py-3 mb-0">
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./about.html">About</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./contact-us.html">Contact Us</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./store-locator.html">Store Locator</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./faq.html">FAQ</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./coming-soon.html">Coming Soon</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./404.html">404</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <Link className="nav-link dropdown-toggle" data-toggle="collapse" to="#sidebarBlog">
                    Blog
                  </Link>
                  {/* Collapse */}
                  <div className="collapse" id="sidebarBlog" data-parent="#sidebarNav">
                    <ul className="list-styled font-size-lg py-3 mb-0">
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./blog.html">Blog</Link>
                      </li>
                      <li className="list-styled-item">
                        <Link className="list-styled-link" to="./blog-post.html">Blog Post</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./docs/getting-started.html">Docs</Link>
                </li>
              </ul>
            </div>
            {/* Body */}
            <div className="moda-body px-10 py-9">
              {/* Social links */}
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link className="text-gray-350" to="#!">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-gray-350" to="#!">
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-gray-350" to="#!">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-gray-350" to="#!">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-gray-350" to="#!">
                    <i className="fab fa-medium-m" />
                  </Link>
                </li>
              </ul>
              {/* Footer */}
              <div className="font-size-xxs text-gray-350">
                © 2019 All rights reserved. Designed by Unvab.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
