import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import { array } from "yup/lib/locale";
import Loading from "../../../components/Loading";
import { ALL_ORDER } from "../../../store/type";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import CartServices from "../../services/cartServices";

export function Orders() {
  let { url } = useRouteMatch();
  console.log("url", url);

  const dispatch = useDispatch();
  const { allOrder, orderCart, loading } = useSelector((store) => store.cart);

  console.log(`CURRENTALLDATA`, allOrder);

  const render = (array = []) => {
    let temp = [];
    array.map((e, i) => {
      if (i < 4) temp.push(e);
    });
    return temp;
  };

  async function getOrder() {
    let res = await CartServices.allOrder(orderCart._id);
    console.log(`dataAllOrder`, res.data);
    try {
      if (res.data) {
        dispatch({ type: ALL_ORDER, payload: res.data });
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  // useEffect(async () => {
  //   // console.log(`ABXCCC`, Object.keys(allOrder).length);
  //   if (Object.keys(allOrder).length > 0) {
  //     getOrder();
  //   }
  // }, []);
  // let dataRender = render(allOrder?.listCart);

  console.log(`allorder`, allOrder);
  console.log(`itemOrder`, orderCart);

  return (
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="card card-lg mb-5 border" key={orderCart?._id}>
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
                          {orderCart?._id}
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">
                          Shipped date:
                        </h6>
                        {/* Text */}
                        <p className="mb-lg-0 font-size-sm font-weight-bold">
                          <time dateTime="2019-10-01">{orderCart?.day}</time>
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Status:</h6>
                        {/* Text */}
                        <p className="mb-0 font-size-sm font-weight-bold">
                          {orderCart?.status}
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">
                          Order Amount:
                        </h6>
                        {/* Text */}
                        <p className="mb-0 font-size-sm font-weight-bold">
                          {orderCart?.cartCount}
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
                      {orderCart?.listCart.map((e) => (
                        <div className="col-3">
                          {/* Image */}
                          <div
                            className="embed-responsive embed-responsive-1by1 bg-cover"
                            style={{
                              backgroundImage: `url(${e.images[0].small_url})`,
                            }}
                          />
                        </div>
                      ))}
                      {orderCart?.listCart.length > 4 ? (
                        <div className="col-3">
                          {/* Image */}
                          <div className="embed-responsive embed-responsive-1by1 bg-light">
                            <a
                              className="embed-responsive-item embed-responsive-item-text text-reset"
                              href="#!"
                            >
                              <div className="font-size-xxs font-weight-bold">
                                +{orderCart?.listCart.length - 3} <br /> more
                              </div>
                            </a>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-row">
                      <div className="col-6">
                        {/* Button */}
                        <NavLink
                          className="btn btn-sm btn-block btn-outline-dark"
                          to={`${url}/${allOrder._id}`}
                        >
                          Order Details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
          </div>
        );
}