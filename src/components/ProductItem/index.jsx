import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART, OPEN_PRODUCT_MODAL } from "../../store/type";
import { numberWithCommas } from "../../utils/numberWithCommas";


export default function ProductItem({ item }) {
  const { listcart } = useSelector((store) => store.cart);
  console.log(`LIST_CARTTTTT`, listcart)
  const { productModal } = useSelector((store) => store.product);
  // console.log(`productModalllllll`, productModal)
  const dispatch = useDispatch();

  return (
    <div className="col-6 col-md-4 col-lg-3">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        <div className="badge badge-white card-badge card-badge-left text-uppercase">
          New
        </div>
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <Link className="card-img-hover" to={`/product/${item.slug}`}>
            <img
              className="card-img-top card-img-back"
              src={
                item.images[0].large_url ===
                "https://salt.tikicdn.com/assets/img/image.svg"
                  ? "img/covers/cover-1.png"
                  : item.images[0].large_url
              }
              alt="..."
            />
            <img
              className="card-img-top card-img-front"
              src={
                item.images[0].large_url ===
                "https://salt.tikicdn.com/assets/img/image.svg"
                  ? "img/covers/cover-1.png"
                  : item.images[0].large_url
              }
              alt="..."
            />
          </Link>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="modal"
                data-target="#modalProduct"
                onClick={() => {
                  dispatch({ type: OPEN_PRODUCT_MODAL, payload: item })
                }}
              >
                <i className="fe fe-eye" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
                onClick={() => dispatch({ type: ADD_TO_CART, payload: item })}
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="shop.html">
              Shoes
            </a>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <Link className="text-body" to={`/product/${item.slug}`}>
              {item.name}
            </Link>
          </div>
          {/* Price */}
          {item.price && (
            <div className="font-weight-bold text-muted">
              {numberWithCommas(item.price)}VND
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
