import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth'

export function OpenShoppingCart() {
    let {openShoppingCart,toggleShoppingCart} = useAuth()
    return (
      <div className="modal fixed-right fade show" style={{display:openShoppingCart?"block":"none", paddingRight:"17px"}} id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-vertical" role="document">
        {/* Full cart (add `.d-none` to disable it) */}
        <div className="modal-content">
          {/* Close */}
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={(e)=>{e.preventDefault(); toggleShoppingCart(false)}}>
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart (2)</strong>
          </div>
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush">
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-4">
                  {/* Image */}
                  <Link to="./product.html">
                    <img className="img-fluid" src="/img/products/product-6.jpg" alt="..." />
                  </Link>
                </div>
                <div className="col-8">
                  {/* Title */}
                  <p className="font-size-sm font-weight-bold mb-6">
                    <Link className="text-body" to="./product.html">Cotton floral print Dress</Link> <br />
                    <span className="text-muted">$40.00</span>
                  </p>
                  {/*Footer */}
                  <div className="d-flex align-items-center">
                    {/* Select */}
                    <select className="custom-select custom-select-xxs w-auto">
                      <option value={1}>1</option>
                      <option value={1}>2</option>
                      <option value={1}>3</option>
                    </select>
                    {/* Remove */}
                    <Link className="font-size-xs text-gray-400 ml-auto" to="#!">
                      <i className="fe fe-x" /> Remove
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-4">
                  {/* Image */}
                  <Link to="./product.html">
                    <img className="img-fluid" src="/img/products/product-10.jpg" alt="..." />
                  </Link>
                </div>
                <div className="col-8">
                  {/* Title */}
                  <p className="font-size-sm font-weight-bold mb-6">
                    <Link className="text-body" to="./product.html">Suede cross body Bag</Link> <br />
                    <span className="text-muted">$49.00</span>
                  </p>
                  {/*Footer */}
                  <div className="d-flex align-items-center">
                    {/* Select */}
                    <select className="custom-select custom-select-xxs w-auto">
                      <option value={1}>1</option>
                      <option value={1}>2</option>
                      <option value={1}>3</option>
                    </select>
                    {/* Remove */}
                    <Link className="font-size-xs text-gray-400 ml-auto" to="#!">
                      <i className="fe fe-x" /> Remove
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/* Footer */}
          <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
            <strong>Subtotal</strong> <strong className="ml-auto">$89.00</strong>
          </div>
          {/* Buttons */}
          <div className="modal-body">
            <Link className="btn btn-block btn-dark" to="./checkout.html">Continue to Checkout</Link>
            <Link className="btn btn-block btn-outline-dark" to="./shopping-cart.html">View Cart</Link>
          </div>
        </div>
        {/* Empty cart (remove `.d-none` to enable it) */}
        <div className="modal-content d-none">
          {/* Close */}
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart (0)</strong>
          </div>
          {/* Body */}
          <div className="modal-body flex-grow-0 my-auto">
            {/* Heading */}
            <h6 className="mb-7 text-center">Your cart is empty 😞</h6>
            {/* Button */}
            <Link className="btn btn-block btn-outline-dark" to="#!">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}
