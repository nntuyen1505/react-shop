import React from 'react'
import { Link } from 'react-router-dom'

export function WishList() {
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
        {/* Products */}
        <div className="row">
          {/* Item */}
          <div className="col-6 col-md-4">
            <div className="card mb-7">
              {/* Image */}
              <div className="card-img">
                {/* Action */}
                <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                  <i className="fe fe-x" />
                </button>
                {/* Button */}
                <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                  <i className="fe fe-eye mr-2 mb-1" /> Quick View
                </button>
                {/* Image */}
                <img className="card-img-top" src="/img/products/product-6.jpg" alt="..." />
              </div>
              {/* Body */}
              <div className="card-body font-weight-bold text-center">
                <Link className="text-body" to="product.html">Cotton floral print Dress</Link> <br />
                <span className="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="col-6 col-md-4">
            <div className="card mb-7">
              {/* Image */}
              <div className="card-img">
                {/* Action */}
                <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                  <i className="fe fe-x" />
                </button>
                {/* Badge */}
                <span className="badge badge-dark card-badge card-badge-left text-uppercase">
                  Sale
                </span>
                {/* Button */}
                <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                  <i className="fe fe-eye mr-2 mb-1" /> Quick View
                </button>
                {/* Image */}
                <img className="card-img-top" src="/img/products/product-10.jpg" alt="..." />
              </div>
              {/* Body */}
              <div className="card-body font-weight-bold text-center">
                <Link className="text-body" to="product.html">Suede cross body Bag</Link> <br />
                <span>
                  <span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
                  <span className="text-primary">$49.00</span>
                </span>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="col-6 col-md-4">
            <div className="card mb-7">
              {/* Image */}
              <div className="card-img">
                {/* Action */}
                <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                  <i className="fe fe-x" />
                </button>
                {/* Button */}
                <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                  <i className="fe fe-eye mr-2 mb-1" /> Quick View
                </button>
                {/* Image */}
                <img className="card-img-top" src="/img/products/product-32.jpg" alt="..." />
              </div>
              {/* Body */}
              <div className="card-body font-weight-bold text-center">
                <Link className="text-reset" to="product.html">Cotton leaf print Shirt</Link>
                <span className="text-muted">$65.00</span>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="col-6 col-md-4">
            <div className="card mb-7">
              {/* Image */}
              <div className="card-img">
                {/* Action */}
                <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                  <i className="fe fe-x" />
                </button>
                {/* Button */}
                <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                  <i className="fe fe-eye mr-2 mb-1" /> Quick View
                </button>
                {/* Image */}
                <img className="card-img-top" src="/img/products/product-7.jpg" alt="..." />
              </div>
              {/* Body */}
              <div className="card-body font-weight-bold text-center">
                <Link className="text-body" to="product.html">Leather Sneakers</Link> <br />
                <Link className="text-primary" to="#">Select Options</Link>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="col-6 col-md-4">
            <div className="card mb-7">
              {/* Image */}
              <div className="card-img">
                {/* Action */}
                <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                  <i className="fe fe-x" />
                </button>
                {/* Button */}
                <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                  <i className="fe fe-eye mr-2 mb-1" /> Quick View
                </button>
                {/* Image */}
                <img className="card-img-top" src="/img/products/product-11.jpg" alt="..." />
              </div>
              {/* Body */}
              <div className="card-body font-weight-bold text-center">
                <Link className="text-body" to="product.html">Another fine dress</Link> <br />
                <span className="text-muted">$99.00</span>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <nav className="d-flex justify-content-center justify-content-md-end">
          <ul className="pagination pagination-sm text-gray-400">
            <li className="page-item">
              <Link className="page-link page-link-arrow" to="#">
                <i className="fa fa-caret-left" />
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">1</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">2</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">3</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">4</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">5</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">6</Link>
            </li>
            <li className="page-item">
              <Link className="page-link page-link-arrow" to="#">
                <i className="fa fa-caret-right" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}
