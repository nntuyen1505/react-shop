import React from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../../store/type";

export function ProductModal() {
  const { openProductModal, productModal } = useSelector(
    (store) => store.product
  );
  console.log(`productModal`, productModal);
  const dispatch = useDispatch();

  const closeModalProduct = () => {
    document.querySelector("body").classList.remove("modal-open");
    document.querySelector(".modal-backdrop").classList.remove("modal-backdrop");
  };

  return (
    <div
      className="modal fade show"
      style={{ display: openProductModal ? "block" : "none" }}
      id="modalProduct"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
      >
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
            }}
          >
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Content */}
          <div className="container-fluid px-xl-0">
            <div className="row align-items-center mx-xl-0">
              <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                {/* Image */}
                {productModal.images && (
                  <img
                    className="img-fluid"
                    src={productModal.images[0].medium_url}
                    alt="..."
                  />
                )}
                {/* Button */}
                <Link
                  className="btn btn-sm btn-block btn-primary"
                  to={`/product/${productModal.slug}`}
                  onClick={() => (
                    closeModalProduct(), 
                    dispatch({ type: CLOSE_MODAL })
                  )}
                >
                  More Product Info <i className="fe fe-info ml-2" />
                </Link>
              </div>
              <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                {/* Heading */}
                {productModal.name && (
                  <h4 className="mb-3">{productModal?.name}</h4>
                )}
                {/* Price */}
                <div className="mb-7">
                  {productModal?.price && (
                    <span className="h5">
                      {numberWithCommas(productModal?.price + " VNĐ ")}
                    </span>
                  )}
                  {productModal.stock_item && (
                    <span className="font-size-sm">
                      (
                      {productModal.stock_item?.qty > 0
                        ? "Còn Hàng"
                        : "Hết Hàng"}
                      )
                    </span>
                  )}
                </div>
                {/* Form */}
                <form>
                  <div className="form-group">
                    {/* Label */}
                    {productModal.configurable_options && (
                      <p>
                        {productModal.configurable_options[0]?.name}:{" "}
                        <strong id="modalProductColorCaption">
                          {productModal.configurable_options[0].values.map(
                            (e, i) => "" + e.label + " "
                          )}
                        </strong>
                      </p>
                    )}
                  </div>

                  <div className="form-group mb-0">
                    <div className="form-row">
                      <div className="col-12 col-lg">
                        {/* Submit */}
                        <button
                          type="submit"
                          className="btn btn-block btn-dark mb-2"
                        >
                          Add to Cart <i className="fe fe-shopping-cart ml-2" />
                        </button>
                      </div>
                      <div className="col-12 col-lg-auto">
                        {/* Wishlist */}
                        <button
                          className="btn btn-outline-dark btn-block mb-2"
                          data-toggle="button"
                        >
                          Wishlist <i className="fe fe-heart ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
