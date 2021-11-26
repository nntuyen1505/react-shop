import React from 'react'
import { Link,  NavLink,  useRouteMatch } from 'react-router-dom'

export function Orders() {
  let {url}  = useRouteMatch()
    return (
      
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
        {/* Order */}
        <div className="card card-lg mb-5 border">
          <div className="card-body pb-0">
            {/* Info */}
            <div className="card card-sm">
              <div className="card-body bg-light">
                <div className="row">
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Order No:</h6>
                    {/* Text */}
                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                      673290789
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                    {/* Text */}
                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                      <time dateTime="2019-10-01">
                        01 Oct, 2019
                      </time>
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Status:</h6>
                    {/* Text */}
                    <p className="mb-0 font-size-sm font-weight-bold">
                      Awating Delivery
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                    {/* Text */}
                    <p className="mb-0 font-size-sm font-weight-bold">
                      $259.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="form-row mb-4 mb-lg-0">
                  <div className="col-3">
                    {/* Image */}
                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/img/products/product-5.jpg)'}} />
                  </div>
                  <div className="col-3">
                    {/* Image */}
                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/img/products/product-112.jpg)'}} />
                  </div>
                  <div className="col-3">
                    {/* Image */}
                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/img/products/product-7.jpg)'}} />
                  </div>
                  <div className="col-3">
                    {/* Image */}
                    <div className="embed-responsive embed-responsive-1by1 bg-light">
                      <Link className="embed-responsive-item embed-responsive-item-text text-reset" to="#!">
                        <div className="font-size-xxs font-weight-bold">
                          +2 <br /> more
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-row">
                  <div className="col-6">
                    {/* Button */}
                    <NavLink className="btn btn-sm btn-block btn-outline-dark" to={`${url}/order-detail`}>
                      Order Details
                    </NavLink>
                  </div>
                  <div className="col-6">
                    {/* Button */}
                    <Link className="btn btn-sm btn-block btn-outline-dark" to="#!">
                      Track order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order */}
        <div className="card card-lg mb-5 border">
          <div className="card-body pb-0">
            {/* Info */}
            <div className="card card-sm">
              <div className="card-body bg-light">
                <div className="row">
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Order No:</h6>
                    {/* Text */}
                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                      871090437
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                    {/* Text */}
                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                      <time dateTime="2019-09-25">
                        25 Sep, 2019
                      </time>
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Status:</h6>
                    {/* Text */}
                    <p className="mb-0 font-size-sm font-weight-bold">
                      In Processing
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                    {/* Text */}
                    <p className="mb-0 font-size-sm font-weight-bold">
                      $75.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="form-row mb-4 mb-lg-0">
                  <div className="col-3">
                    {/* Image */}
                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/img/products/product-11.jpg)'}} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-row">
                  <div className="col-6">
                    {/* Button */}
                    <Link className="btn btn-sm btn-block btn-outline-dark" to="account-order.html">
                      Order Details
                    </Link>
                  </div>
                  <div className="col-6">
                    {/* Button */}
                    <Link className="btn btn-sm btn-block btn-outline-dark" to="#!">
                      Track order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order */}
        <div className="card card-lg mb-5 border">
          <div className="card-body pb-0">
            {/* Info */}
            <div className="card card-sm">
              <div className="card-body bg-light">
                <div className="row">
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Order No:</h6>
                    {/* Text */}
                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                      891230563
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                    {/* Text */}
                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                      <time dateTime="2019-09-07">
                        07 Sep, 2019
                      </time>
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Status:</h6>
                    {/* Text */}
                    <p className="mb-0 font-size-sm font-weight-bold">
                      Delivered
                    </p>
                  </div>
                  <div className="col-6 col-lg-3">
                    {/* Heading */}
                    <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                    {/* Text */}
                    <p className="mb-0 font-size-sm font-weight-bold">
                      $69.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="form-row mb-4 mb-lg-0">
                  <div className="col-3">
                    {/* Image */}
                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/img/products/product-14.jpg)'}} />
                  </div>
                  <div className="col-3">
                    {/* Image */}
                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/img/products/product-15.jpg)'}} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-row">
                  <div className="col-6">
                    {/* Button */}
                    <Link className="btn btn-sm btn-block btn-outline-dark" to="account-order.html">
                      Order Details
                    </Link>
                  </div>
                  <div className="col-6">
                    {/* Button */}
                    <Link className="btn btn-sm btn-block btn-outline-dark" to="#!">
                      Track order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <nav className="d-flex justify-content-center justify-content-md-end mt-10">
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
