import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CLOSE_MODAL, REMOVE_FROM_CART } from "../../store/type";
import { numberWithCommas } from "../../utils/numberWithCommas";

export function OpenShoppingCart() {
  const { openShow, listCart, totalPrice, cartCount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(listCart);


  const closeModalCart = () => {
    document.querySelector(".modal-backdrop").classList.remove("modal-backdrop");
    document.querySelector("body").classList.remove("modal-open");
  };

  return (
    <div
      className="modal fixed-right fade show"
      style={{ display: openShow ? "block" : "none", paddingRight: "17px" }}
      id="modalShoppingCart"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-vertical" role="document">
        {/* Full cart (add `.d-none` to disable it) */}
        <div className="modal-content">
          {/* Close */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: CLOSE_MODAL });
              closeModalCart()
            }}
          >
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart ({cartCount})</strong>
          </div>
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush">
            {listCart.map((e, i) => { 
              return (
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-4">
                      {/* Image */}
                      <Link to={`/product/${e.slug}`}>
                        <img
                          className="img-fluid"
                          src={e.images[0].medium_url}
                          onClick={() => (
                            dispatch({ type: CLOSE_MODAL }),
                            closeModalCart()
                            )}
                          alt="..."
                        />
                      </Link>
                    </div>
                    <div className="col-8">
                      {/* Title */}
                      <p className="font-size-sm font-weight-bold mb-6">
                        <Link
                          className="text-body"
                          onClick={() => (
                            dispatch({ type: CLOSE_MODAL }),
                            closeModalCart()
                            )}
                          to={`/product/${e.slug}`
                        }
                        >
                          {e.name}
                        </Link>{" "}
                        <br />
                        <span className="text-muted">
                          {numberWithCommas(e.price)}
                        </span>
                      </p>
                      {/*Footer */}
                      <div className="d-flex align-items-center">
                        {/* Select */}
                        <input type="text" value={e.number}/>
                        {/* Remove */}
                        <Link
                          className="font-size-xs text-gray-400 ml-auto"
                          to="#!"
                          onClick={()=>dispatch({type:REMOVE_FROM_CART, payload: e.id})}
                        >
                          <i className="fe fe-x" /> Remove
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          {/* Footer */}
          <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
            <strong>Subtotal</strong>{" "}
            <strong className="ml-auto">{numberWithCommas(totalPrice)} VNĐ</strong>
          </div>
          {/* Buttons */}
          <div className="modal-body">
            <Link className="btn btn-block btn-dark" to="./checkout.html">
              Continue to Checkout
            </Link>
            <Link
              className="btn btn-block btn-outline-dark"
              to="./shopping-cart.html"
            >
              View Cart
            </Link>
          </div>
        </div>
        {/* Empty cart (remove `.d-none` to enable it) */}
        <div className="modal-content d-none">
          {/* Close */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
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
  );
}
