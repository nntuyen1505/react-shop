import React, { useEffect, useState, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART, WIDH_LIST } from "../../../store/type";
import { numberWithCommas } from "../../../utils/numberWithCommas";

export default function Product({ data }) {

  const {listCart} = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  let $ = window.$;
  let ref = useRef();
  let thisRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      $(ref.current).flickity({
        draggable: false,
        fade: true,
      });
      $(thisRef.current).flickity({
        asNavFor: "#productSlider",
        contain: true,
        wrapAround: false,
      });
    }, 2000);
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-6">
                {/* Card */}
                <div className="card">
                  {/* Badge */}
                  {data?.discount_rate && (
                    <div className="badge badge-primary card-badge text-uppercase">
                      -{data?.discount_rate}%
                    </div>
                  )}
                  {/* Slider */}
                  <div className="mb-4" ref={ref} id="productSlider">
                    {data.images &&
                      data.images.map((e, i) => (
                        <a href={e.large_url} data-fancybox  key={i}>
                          <img
                            src={e.medium_url}
                            alt="..."
                            className="card-img-top"
                          />
                        </a>
                      ))}
                  </div>
                </div>
                {/* Slider */}
                <div ref={thisRef} className="flickity-nav mx-n2 mb-10 mb-md-0"> 
                {
                  data.images && data.images.map((e,i)=>(
                    // console.log(e,i),
                    <div className="col-12 px-2" style={{ maxWidth: "113px" }}>
                    {/* Image */}
                    <div
                      className="embed-responsive embed-responsive-1by1 bg-cover"
                      style={{
                        backgroundImage: `url(${e.medium_url})`,
                      }}
                    />
                  </div>
                  ))
                }          
                </div>
              </div>
              <div className="col-12 col-md-6 pl-lg-10">
                {/* Header */}
                <div className="row mb-1">
                  <div className="col">
                    {/* Preheading */}
                    <Link className="text-muted" to="shop.html">
                      Sneakers
                    </Link>
                  </div>
                  <div className="col-auto">
                    {/* Rating */}
                    <div
                      className="rating font-size-xs text-dark"
                      data-value={data?.rating_average}
                    >
                      <div className="rating-item">
                        <i className="fas fa-star" />
                      </div>
                      <div className="rating-item">
                        <i className="fas fa-star" />
                      </div>
                      <div className="rating-item">
                        <i className="fas fa-star" />
                      </div>
                      <div className="rating-item">
                        <i className="fas fa-star" />
                      </div>
                      <div className="rating-item">
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <Link
                      className="font-size-sm text-reset ml-2"
                      to="#reviews"
                    >
                      Reviews ({data?.review_count})
                    </Link>
                  </div>
                </div>
                {/* Heading */}
                <h3 className="mb-2">{data?.name}</h3>
                {/* Price */}
                <div className="mb-7">
                  {data?.price && (
                    <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">
                      {numberWithCommas(data?.price)}VND
                    </span>
                  )}
                  {data?.real_price && (
                    <span className="ml-1 font-size-h5 font-weight-bolder text-primary">
                      {numberWithCommas(data?.real_price)}VND
                    </span>
                  )}
                  {data?.stock_item && (
                    <span className="font-size-sm ml-1">
                      ({data.stock_item.qty > 0 ? "Còn Hàng" : "Hết Hàng"})
                    </span>
                  )}
                </div>
                {/* Form */}
                <form>

                  {data.configurable_options &&
                    data?.configurable_options.map((e, i) => (
                      // console.log(e),
                      <div className="form-group" key={i}>
                        {/* Label */}
                        <p className="mb-5">
                          {e.name}:<strong id="colorCaption">{e.values.map((element)=>(" "+element.label+ " "))}</strong>
                        </p>   
                      </div>
                    ))
                  }

                  <div className="form-group">
                    {/* Size chart */}
                    <p className="mb-8">
                      <img
                        src="/img/icons/icon-ruler.svg"
                        alt="..."
                        className="img-fluid"
                      />{" "}
                      <a
                        className="text-reset text-decoration-underline ml-3"
                        data-toggle="modal"
                        href="#modalSizeChart"
                      >
                        Size chart
                      </a>
                    </p>
                    <div className="form-row mb-7">
                      <div className="col-12 col-lg-auto">
                        {/* Quantity */}
                        <select className="custom-select mb-2">
                          <option value={1} selected>
                            1
                          </option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg">
                        {/* Submit */}
                        <button
                          type="submit"
                          className="btn btn-block btn-dark mb-2"
                          onClick={()=>dispatch({type:ADD_TO_CART,payload:{...data}})}
                        >
                          Add to Cart <i className="fe fe-shopping-cart ml-2" />
                        </button>
                      </div>
                      <div className="col-12 col-lg-auto">
                        {/* Wishlist */}
                        <button
                          className="btn btn-outline-dark btn-block mb-2"
                          data-toggle="button"
                          onClick={()=>dispatch({type:WIDH_LIST, payload:{...data}})}
                        >
                          Wishlist <i className="fe fe-heart ml-2" />
                        </button>
                      </div>
                    </div>
                    {/* Text */}
                    <p>
                      <span className="text-gray-500">
                        Is your size/color sold out?
                      </span>
                      <Link
                        className="text-reset text-decoration-underline"
                        data-toggle="modal"
                        to="#modalWaitList"
                      >
                        Join the Wait List!
                      </Link>
                    </p>
                    {/* Share */}
                    <p className="mb-0">
                      <span className="mr-4">Share:</span>
                      <Link
                        className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                        to="#!"
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                        to="#!"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                        to="#!"
                      >
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
