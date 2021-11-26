import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";


export default function Footer() {
  let { toggleSizeGuide } = useAuth();
  return (
    <footer
      className="bg-dark bg-cover @@classList"
      style={{ backgroundImage: "url(/img/patterns/pattern-2.svg)" }}
    >
      <div className="py-12 border-bottom border-gray-700">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              {/* Heading */}
              <h5 className="mb-7 text-center text-white">
                Want style Ideas and Treats?
              </h5>
              {/* Form */}
              <form className="mb-11">
                <div className="form-row align-items-start">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control form-control-gray-700 form-control-lg"
                      placeholder="Enter Email *"
                    />
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-gray-500 btn-lg">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              {/* Heading */}
              <h4 className="mb-6 text-white">Shopper.</h4>
              {/* Social */}
              <ul className="list-unstyled list-inline mb-7 mb-md-0">
                <li className="list-inline-item">
                  <Link to="#!" className="text-gray-350">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#!" className="text-gray-350">
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#!" className="text-gray-350">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#!" className="text-gray-350">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#!" className="text-gray-350">
                    <i className="fab fa-medium" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Support</h6>
              {/* Links */}
              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <Link className="text-gray-300" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/faq">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300"
                    data-toggle="modal"
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSizeGuide(true);
                    }}
                  >
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300"
                    to="/shipping"
                  >
                    Shipping &amp; Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Shop</h6>
              {/* Links */}
              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <Link className="text-gray-300" to="/shop">
                    Men's Shopping
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/shop">
                    Women's Shopping
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/shop">
                    Kids' Shopping
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/shop">
                    Discounts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Company</h6>
              {/* Links */}
              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="text-gray-300" to="/about">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="#!">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="#!">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="#!">
                    Privacy &amp; Cookie policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Contact</h6>
              {/* Links */}
              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="text-gray-300" to="#!">
                    1-202-555-0105
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="#!">
                    1-202-555-0106
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="#!">
                    help@shopper.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Copyright */}
              <p className="mb-3 mb-md-0 font-size-xxs text-muted">
                © 2019 All rights reserved. Designed by Unvab.
              </p>
            </div>
            <div className="col-auto">
              {/* Payment methods */}
              <img
                className="footer-payment"
                src="/img/payment/mastercard.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/visa.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/amex.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/paypal.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/maestro.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/klarna.svg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
