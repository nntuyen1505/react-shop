import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Features from "../../components/Features";
import Layout from "../../components/layout";
import { decrease, increase, removeCart } from "../../store/action/cartAction";
import { numberWithCommas } from "../../utils/numberWithCommas";

export default function ShoppingCart() {
  const { listCart,totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Layout>
      <BreadCrumb />
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h3 className="mb-10 text-center">Shopping Cart</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-7">
              {/* List group */}
              <ul className="list-group list-group-lg list-group-flush-x mb-6">
                {listCart.map((e) => {
                  return (
                    <li className="list-group-item" key={e.id}>
                      <div className="row align-items-center">
                        <div className="col-3">
                          {/* Image */}
                          <Link to="product.html">
                            <img
                              src={e.images[0].medium_url}
                              alt="..."
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="col">
                          {/* Title */}
                          <div className="d-flex mb-2 font-weight-bold">
                            <Link className="text-body" to="product.html">
                              {e?.name}
                            </Link>{" "}
                            <span className="ml-auto">
                              {numberWithCommas(e?.price)}
                            </span>
                          </div>
                          {/* Text */}
                          {
                            e.configurable_options && (
                              <p className="mb-7 font-size-sm text-muted">
                              Size: M <br />
                              {e.configurable_options[0]?.name}: {e.configurable_options[0]?.values[0].label}
                            </p>
                            )
                          }
                          {/*Footer */}
                          <div className="d-flex align-items-center">
                            {/* Select */}
                            <div className="add">
                              <button
                                className="plus"
                                onClick={() => {
                                  dispatch(decrease(e.id));
                                }}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="cartItem-num"
                                value={e.number}
                              />
                              <button
                                className="minus"
                                onClick={() => {
                                  dispatch(increase(e.id));
                                }}
                              >
                                +
                              </button>
                            </div>
                            {/* Remove */}
                            <Link
                              className="font-size-xs text-gray-400 ml-auto"
                              to="#"
                              onClick={()=>dispatch(removeCart(e.id))}
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
              <div className="row align-items-end justify-content-between mb-10 mb-md-0">
                <div className="col-12 col-md-7">
                  {/* Coupon */}
                  <form className="mb-7 mb-md-0">
                    <label
                      className="font-size-sm font-weight-bold"
                      htmlFor="cartCouponCode"
                    >
                      Coupon code:
                    </label>
                    <div className="row form-row">
                      <div className="col">
                        {/* Input */}
                        <input
                          className="form-control form-control-sm"
                          id="cartCouponCode"
                          type="text"
                          placeholder="Enter coupon code*"
                        />
                      </div>
                      <div className="col-auto">
                        {/* Button */}
                        <button className="btn btn-sm btn-dark" type="submit">
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-auto">
                  {/* Button */}
                  <button className="btn btn-sm btn-outline-dark">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
              {/* Total */}
              <div className="card mb-7 bg-light">
                <div className="card-body">
                  <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                    <li className="list-group-item d-flex">
                      <span>Subtotal</span>{" "}
                      <span className="ml-auto font-size-sm">{numberWithCommas(totalPrice)} VNĐ</span>
                    </li>
                    <li className="list-group-item d-flex">
                      <span>Tax</span>{" "}
                      <span className="ml-auto font-size-sm">$00.00</span>
                    </li>
                    <li className="list-group-item d-flex font-size-lg font-weight-bold">
                      <span>Total</span>{" "}
                      <span className="ml-auto font-size-sm">{numberWithCommas(totalPrice)} VNĐ</span>
                    </li>
                    <li className="list-group-item font-size-sm text-center text-gray-500">
                      Shipping cost calculated at Checkout *
                    </li>
                  </ul>
                </div>
              </div>
              {/* Button */}
              <Link className="btn btn-block btn-dark mb-2" to="/checkout">
                Proceed to Checkout
              </Link>
              {/* Link */}
              <Link
                className="btn btn-link btn-sm px-0 text-body"
                to="/shop"
              >
                <i className="fe fe-arrow-left mr-2" /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </Layout>
  );
}
