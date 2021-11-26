import React from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../utils/numberWithCommas";

export default function ProductItem(props) {
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
          <Link className="card-img-hover" to={`/product/${props.slug}`}>
            <img
              className="card-img-top card-img-back"
              src={
                props.images[0].large_url ===
                "https://salt.tikicdn.com/assets/img/image.svg"
                  ? "img/covers/cover-1.png"
                  : props.images[0].large_url
              }
              alt="..."
            />
            <img
              className="card-img-top card-img-front"
              src={
                props.images[0].large_url ===
                "https://salt.tikicdn.com/assets/img/image.svg"
                  ? "img/covers/cover-1.png"
                  : props.images[0].large_url
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
              >
                <i className="fe fe-eye" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
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
            <Link className="text-body" to="product.html">
              {props.name}
            </Link>
          </div>
          {/* Price */}
          {props.price && (
            <div className="font-weight-bold text-muted">
              {numberWithCommas(props.price)}VND
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
