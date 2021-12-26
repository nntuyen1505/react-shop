import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import { Link } from "react-router-dom";
import CartServices from "../../services/cartServices";
import { useDispatch } from "react-redux";
import { CLEAR_CART, ORDER_CART } from "../../../store/type";
import { useHistory } from "react-router";
const rgPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const schema = yup
  .object({
    firstName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    country: yup.string().required("This field is required"),
    address: yup.string().required("This field is required"),
    address2: yup.string().required("This field is required"),
    city: yup.string().required("This field is required"),
    zip: yup
      .string()
      .test("len", "Must be exactly 5 characters", (val) => val.length === 5),
    phone: yup.string().matches(rgPhone, "This field is required").required(),
  })
  .required();

// let $ = window.$;
export default function Content() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  let history = useHistory();

  const { listCart, totalPrice, cartCount } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });



  
  const onSubmit = async (dataFormCheckout) => {

    let data= { listCart, totalPrice, cartCount, dataFormCheckout, day: today };

    let res = await CartServices.order(data);
    console.log(`ResOrder`, res.data);
    try{
      if (res.data) {
        dispatch({ type: ORDER_CART, payload: res.data });
        dispatch({ type: CLEAR_CART });
        history.push(`/order-completed/${res.data._id}`);
      }
    }catch(error){

      console.log(error)
    }
  };

  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h3 className="mb-4">Checkout</h3>
            {/* Subheading */}
            <p className="mb-10">
              Already have an account?{" "}
              <Link className="font-weight-bold text-reset" to="/auth">
                Click here to login
              </Link>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-7">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Heading */}
              <h6 className="mb-7">Billing Details</h6>
              {/* Billing details */}
              <div className="row mb-9">
                <div className="col-12 col-md-6">
                  {/* First Name */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingFirstName">
                      First Name *
                    </label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.firstName ? "errorborder" : ""
                      }`}
                      type="text"
                      placeholder="First Name"
                      {...register("firstName")}
                    />
                    <p className="error-class">{errors.firstName?.message}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* Last Name */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingLastName">Last Name *</label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.lastName ? "errorborder" : ""
                      }`}
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName")}
                    />
                    <p className="error-class">{errors.lastName?.message}</p>
                  </div>
                </div>
                <div className="col-12">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingEmail">Email *</label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.email ? "errorborder" : ""
                      }`}
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <p className="error-class">{errors.email?.message}</p>
                  </div>
                </div>
                <div className="col-12">
                  {/* Company Name */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingCompany">
                      Company name *
                    </label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Company name (optional)"
                      {...register("companyName")}
                    />
                  </div>
                </div>
                <div className="col-12">
                  {/* Country */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingCountry">Country *</label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.country ? "errorborder" : ""
                      }`}
                      type="text"
                      placeholder="Country"
                      {...register("country")}
                    />
                    <p className="error-class">{errors.country?.message}</p>
                  </div>
                </div>
                <div className="col-12">
                  {/* Address Line 1 */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingAddress">
                      Address Line 1 *
                    </label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.address ? "errorborder" : ""
                      }`}
                      type="text"
                      placeholder="Address Line 1"
                      {...register("address")}
                    />
                    <p className="error-class">{errors.address?.message}</p>
                  </div>
                </div>
                <div className="col-12">
                  {/* Address Line 2 */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingAddressTwo">
                      Address Line 2
                    </label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.address2 ? "errorborder" : ""
                      }`}
                      type="text"
                      placeholder="Address Line 2 (optional)"
                      {...register("address2")}
                    />
                    <p className="error-class">{errors.address2?.message}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* Town / City */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingTown">Town / City *</label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.city ? "errorborder" : ""
                      }`}
                      type="text"
                      placeholder="Town / City"
                      {...register("city")}
                    />
                    <p className="error-class">{errors.city?.message}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* ZIP / Postcode */}
                  <div className="form-group">
                    <label htmlFor="checkoutBillingZIP">ZIP / Postcode *</label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.zip ? "errorborder" : ""
                      }`}
                      type="text"
                      placeholder="ZIP / Postcode"
                      {...register("zip")}
                    />
                    <p className="error-class">{errors.zip?.message}</p>
                  </div>
                </div>
                <div className="col-12">
                  {/* Mobile Phone */}
                  <div className="form-group mb-0">
                    <label htmlFor="checkoutBillingPhone">Mobile Phone *</label>
                    <input
                      className={`form-control form-control-sm ${
                        errors?.phone ? "errorborder" : ""
                      }`}
                      type="tel"
                      placeholder="Mobile Phone"
                      {...register("phone")}
                    />
                    <p className="error-class">{errors.phone?.message}</p>
                  </div>
                </div>
              </div>
              {/* Button */}
              <button className="btn btn-block btn-dark btn-none" type="submit">
                Place Order
              </button>
            </form>
          </div>
          <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
            {/* Heading */}
            <h6 className="mb-7">Order Items ({cartCount})</h6>
            {/* Divider */}
            <hr className="my-7" />
            {/* List group */}
            <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
              {listCart.map((e) => {
                return (
                  <li className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-4">
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
                        <p className="mb-4 font-size-sm font-weight-bold">
                          <Link className="text-body" to="product.html">
                            {e.name}
                          </Link>{" "}
                          <br />
                          <span className="text-muted">
                            {numberWithCommas(e.price)}
                          </span>
                        </p>
                        {/* Text */}
                        {e.configurable_options && (
                          <div className="font-size-sm text-muted">
                            Size: M <br />
                            {e.configurable_options[0]?.name}:{" "}
                            {e.configurable_options[0]?.values[0]?.label}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* Card */}
            <div className="card mb-9 bg-light">
              <div className="card-body">
                <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                  <li className="list-group-item d-flex">
                    <span>Subtotal</span>{" "}
                    <span className="ml-auto font-size-sm">
                      {numberWithCommas(totalPrice)} VNĐ
                    </span>
                  </li>
                  <li className="list-group-item d-flex">
                    <span>Tax</span>{" "}
                    <span className="ml-auto font-size-sm">$00.00</span>
                  </li>
                  <li className="list-group-item d-flex">
                    <span>Shipping</span>{" "}
                    <span className="ml-auto font-size-sm">20.000 VNĐ</span>
                  </li>
                  <li className="list-group-item d-flex font-size-lg font-weight-bold">
                    <span>Total</span>{" "}
                    <span className="ml-auto">
                      {numberWithCommas(totalPrice + 20000)} VNĐ
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Disclaimer */}
            <p className="mb-7 font-size-xs text-gray-500">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            {/* Button */}
            {/* <button className="btn btn-block btn-dark" type="submit">
              Place Order
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

//  {/* Heading */}
//  <h6 className="mb-7">Shipping Details</h6>
//  {/* Shipping details */}
//  <div className="table-responsive mb-6">
//    <table className="table table-bordered table-sm table-hover mb-0">
//      <tbody>
//        <tr>
//          <td>
//            <div className="custom-control custom-radio">
//              <input
//                className="custom-control-input"
//                id="checkoutShippingStandard"
//                type="radio"
//              />
//              <label
//                className="custom-control-label text-body text-nowrap"
//                htmlFor="checkoutShippingStandard"
//              >
//                Standard Shipping
//              </label>
//            </div>
//          </td>
//          <td>Delivery in 5 - 7 working days</td>
//          <td>$8.00</td>
//        </tr>
//        <tr>
//          <td>
//            <div className="custom-control custom-radio">
//              <input
//                className="custom-control-input"
//                id="checkoutShippingExpress"
//                type="radio"
//              />
//              <label
//                className="custom-control-label text-body text-nowrap"
//                htmlFor="checkoutShippingExpress"
//              >
//                Express Shipping
//              </label>
//            </div>
//          </td>
//          <td>Delivery in 3 - 5 working days</td>
//          <td>$12.00</td>
//        </tr>
//        <tr>
//          <td>
//            <div className="custom-control custom-radio">
//              <input
//                className="custom-control-input"
//                id="checkoutShippingShort"
//                type="radio"
//              />
//              <label
//                className="custom-control-label text-body text-nowrap"
//                htmlFor="checkoutShippingShort"
//              >
//                1 - 2 Shipping
//              </label>
//            </div>
//          </td>
//          <td>Delivery in 1 - 2 working days</td>
//          <td>$18.00</td>
//        </tr>
//        <tr>
//          <td>
//            <div className="custom-control custom-radio">
//              <input
//                className="custom-control-input"
//                id="checkoutShippingFree"
//                type="radio"
//              />
//              <label
//                className="custom-control-label text-body text-nowrap"
//                htmlFor="checkoutShippingFree"
//              >
//                Free Shipping
//              </label>
//            </div>
//          </td>
//          <td>
//            Living won't the He one every subdue meat replenish face
//            was you morning firmament darkness.
//          </td>
//          <td>$0.00</td>
//        </tr>
//      </tbody>
//    </table>
//  </div>
//  {/* Address */}
//  <div className="mb-9">
//    {/* Checkbox */}
//    <div className="custom-control custom-checkbox">
//      <input
//        className="custom-control-input"
//        id="checkoutShippingAddress"
//        type="checkbox"
//      />
//      <label
//        className="custom-control-label font-size-sm"
//        data-toggle="collapse"
//        data-target="#checkoutShippingAddressCollapse"
//        htmlFor="checkoutShippingAddress"
//      >
//        Ship to a different address?
//      </label>
//    </div>
//    {/* Collapse */}
//    <div className="collapse" id="checkoutShippingAddressCollapse">
//      <div className="row mt-6">
//        <div className="col-12">
//          {/* Country */}
//          <div className="form-group">
//            <label htmlFor="checkoutShippingAddressCountry">
//              Country *
//            </label>
//            <input
//              className="form-control form-control-sm"
//              id="checkoutShippingAddressCountry"
//              type="text"
//              placeholder="Country"
//            />
//          </div>
//        </div>
//        <div className="col-12">
//          {/* Address Line 1 */}
//          <div className="form-group">
//            <label htmlFor="checkoutShippingAddressLineOne">
//              Address Line 1 *
//            </label>
//            <input
//              className="form-control form-control-sm"
//              id="checkoutShippingAddressLineOne"
//              type="text"
//              placeholder="Address Line 1"
//            />
//          </div>
//        </div>
//        <div className="col-12">
//          {/* Address Line 2 */}
//          <div className="form-group">
//            <label htmlFor="checkoutShippingAddressLineTwo">
//              Address Line 2
//            </label>
//            <input
//              className="form-control form-control-sm"
//              id="checkoutShippingAddressLineTwo"
//              type="text"
//              placeholder="Address Line 2 (optional)"
//            />
//          </div>
//        </div>
//        <div className="col-6">
//          {/* Town / City */}
//          <div className="form-group">
//            <label htmlFor="checkoutShippingAddressTown">
//              Town / City *
//            </label>
//            <input
//              className="form-control form-control-sm"
//              id="checkoutShippingAddressTown"
//              type="text"
//              placeholder="Town / City"
//            />
//          </div>
//        </div>
//        <div className="col-6">
//          {/* Town / City */}
//          <div className="form-group">
//            <label htmlFor="checkoutShippingAddressZIP">
//              ZIP / Postcode *
//            </label>
//            <input
//              className="form-control form-control-sm"
//              id="checkoutShippingAddressZIP"
//              type="text"
//              placeholder="ZIP / Postcode"
//            />
//          </div>
//        </div>
//        <div className="col-12">
//          {/* Button */}
//          <button
//            className="btn btn-sm btn-outline-dark"
//            type="submit"
//          >
//            Save Address
//          </button>
//        </div>
//      </div>
//    </div>
//  </div>
//  {/* Heading */}
//  <h6 className="mb-7">Payment</h6>
//  {/* List group */}
//  <div className="list-group list-group-sm mb-7">
//    <div className="list-group-item">
//      {/* Radio */}
//      <div className="custom-control custom-radio">
//        {/* Input */}
//        <input
//          className="custom-control-input"
//          id="checkoutPaymentCard"
//          type="radio"
//          data-toggle="collapse"
//          data-action="show"
//          data-target="#checkoutPaymentCardCollapse"
//        />
//        {/* Label */}
//        <label
//          className="custom-control-label font-size-sm text-body text-nowrap"
//          htmlFor="checkoutPaymentCard"
//        >
//          Credit Card{" "}
//          <img
//            className="ml-2"
//            src="/img/brands/color/cards.svg"
//            alt="..."
//          />
//        </label>
//      </div>
//    </div>
//    <div
//      className="list-group-item collapse py-0"
//      id="checkoutPaymentCardCollapse"
//    >
//      {/* Form */}
//      <div className="form-row py-5">
//        <div className="col-12">
//          <div className="form-group mb-4">
//            <label
//              className="sr-only"
//              htmlFor="checkoutPaymentCardNumber"
//            >
//              Card Number
//            </label>
//            <input
//              className="form-control form-control-sm"
//              id="checkoutPaymentCardNumber"
//              type="text"
//              placeholder="Card Number *"
//              required
//            />
//          </div>
//        </div>
//        <div className="col-12">
//          <div className="form-group mb-4">
//            <label
//              className="sr-only"
//              htmlFor="checkoutPaymentCardName"
//            >
//              Name on Card
//            </label>
//            <input
//              className="form-control form-control-sm"
//              id="checkoutPaymentCardName"
//              type="text"
//              placeholder="Name on Card *"
//              required
//            />
//          </div>
//        </div>
//        <div className="col-12 col-md-4">
//          <div className="form-group mb-md-0">
//            <label
//              className="sr-only"
//              htmlFor="checkoutPaymentMonth"
//            >
//              Month
//            </label>
//            <select
//              className="custom-select custom-select-sm"
//              id="checkoutPaymentMonth"
//            >
//              <option>January</option>
//              <option>February</option>
//              <option>March</option>
//            </select>
//          </div>
//        </div>
//        <div className="col-12 col-md-4">
//          <div className="form-group mb-md-0">
//            <label
//              className="sr-only"
//              htmlFor="checkoutPaymentCardYear"
//            >
//              Year
//            </label>
//            <select
//              className="custom-select custom-select-sm"
//              id="checkoutPaymentCardYear"
//            >
//              <option>2017</option>
//              <option>2018</option>
//              <option>2019</option>
//              <option>2020</option>
//              <option>2021</option>
//            </select>
//          </div>
//        </div>
//        <div className="col-12 col-md-4">
//          <div className="input-group input-group-merge">
//            <input
//              className="form-control form-control-sm"
//              id="checkoutPaymentCardCVV"
//              type="text"
//              placeholder="CVV *"
//              required
//            />
//            <div className="input-group-append">
//              <span
//                className="input-group-text"
//                data-toggle="popover"
//                data-placement="top"
//                data-trigger="hover"
//                data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards."
//              >
//                <i className="fe fe-help-circle" />
//              </span>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="list-group-item">
//      {/* Radio */}
//      <div className="custom-control custom-radio">
//        {/* Input */}
//        <input
//          className="custom-control-input"
//          id="checkoutPaymentPaypal"
//          type="radio"
//          data-toggle="collapse"
//          data-action="hide"
//          data-target="#checkoutPaymentCardCollapse"
//        />
//        {/* Label */}
//        <label
//          className="custom-control-label font-size-sm text-body text-nowrap"
//          htmlFor="checkoutPaymentPaypal"
//        >
//          <img src="/img/brands/color/paypal.svg" alt="..." />
//        </label>
//      </div>
//    </div>
//  </div>
//  {/* Notes */}
//  <textarea
//    className="form-control form-control-sm mb-9 mb-md-0 font-size-xs"
//    rows={5}
//    placeholder="Order Notes (optional)"
//    defaultValue={""}
//  />
