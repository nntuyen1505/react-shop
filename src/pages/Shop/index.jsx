import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch, useHistory } from "react-router";
import BreadCrumb, { BreadCrumbItem } from "../../components/BreadCrumb";
import Layout from "../../components/layout";
import Pagination from "../../components/pagination";
import ProductList from "../../components/ProductList";
import Promo from "../../components/Promo";
import ProductServices from "../services/productServices";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, fetchProductShopPaginate } from "../../store/action/productAction";
// import Loading from "../../components/Loading"
let $ = window.$;

function convertQueryToObject() {
  // console.log(window.location.search)
  var search = window.location.search.substring(1);
  // console.log(search)
  return !search
    ? {}
    : JSON.parse(
        '{"' +
          decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) +
          '"}'
      );
}
const convertObjectToQuery = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export default function Shop() {


const dispatch = useDispatch()
const {dataCategory,dataProduct,dataPaginate} = useSelector((store) => store.product)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  let thisRef = useRef();
  useEffect(() => {
    $(thisRef.current).flickity({
      pageDots: true,
    });
  }, []);


  const [title, setTitle] = useState("");
  // console.log(title);

  useEffect(async () => {
    dispatch(fetchCategories())
  }, []);

  // console.log(category.title)
  // let queryUrl = window.location.search
  // console.log(queryUrl)
  let objUrl = convertQueryToObject();
  console.log(objUrl);
  let queryUrl = convertObjectToQuery(objUrl);


  console.log(queryUrl);
  // console.log(queryUrl)
  // console.log(window)
  // let p  =  convertQueryToObject()
  // console.log("----ToObject----",p)

  useEffect(async () => {
    dispatch(fetchProductShopPaginate(queryUrl))
  }, [queryUrl]);

  const history = useHistory();
  const { url } = useRouteMatch();

  const handleChangePrice = (event) => {
    let value = event.currentTarget.value;
    // console.log(value);
    let obj = convertQueryToObject();
    // console.log("obj1",obj);
    obj.sort = value;
    // console.log("obj2",obj);
    history.push(`${url}?${convertObjectToQuery(obj)}`);
  };

  // if(state.loading){
  //   return <Loading/>
  // }

  return (
    <Layout>
      <Promo />
      <section className="py-11">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              {/* Filters */}
              <form className="mb-10 mb-md-0">
                <ul className="nav nav-vertical" id="filterNav">
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                      data-toggle="collapse"
                      href="#categoryCollapse"
                    >
                      Category
                    </a>
                    {/* Collapse */}
                    <div className="collapse show" id="categoryCollapse">
                      <div className="form-group">
                        <ul className="list-styled mb-0" id="productsNav">
                          {dataCategory.map((e, i) => (
                            // console.log("abc",e),
                            <li className="list-styled-item" key={e.id}>
                              <Link
                                onClick={() => setTitle(e.title)}
                                to={`/shop?${convertObjectToQuery({
                                  // ...p,
                                  categories: e.id,
                                  // title: e.title,
                                  page: 1,
                                })}`}
                                className="list-styled-link"
                              >
                                {e.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
           
                </ul>
              </form>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              {/* Slider */}
              <div
                ref={thisRef}
                className="flickity-page-dots-inner mb-9"
                // data-flickity='{"pageDots": true}'
              >
                {/* Item */}
                <div className="w-100">
                  <div
                    className="card bg-h-100 bg-left"
                    style={{ backgroundImage: "url(/img/covers/cover-24.jpg)" }}
                  >
                    <div className="row" style={{ minHeight: "400px" }}>
                      <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                        <div className="card-body px-md-10 py-11">
                          {/* Heading */}
                          <h4>2019 Summer Collection</h4>
                          {/* Button */}
                          <a
                            className="btn btn-link px-0 text-body"
                            href="shop.html"
                          >
                            View Collection{" "}
                            <i className="fe fe-arrow-right ml-2" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                        style={{
                          backgroundImage: "url(/img/covers/cover-16.jpg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="w-100">
                  <div
                    className="card bg-cover"
                    style={{ backgroundImage: "url(/img/covers/cover-29.jpg)" }}
                  >
                    <div
                      className="row align-items-center"
                      style={{ minHeight: "400px" }}
                    >
                      <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        <div className="card-body px-md-10 py-11">
                          {/* Heading */}
                          <h4 className="mb-5">
                            Get -50% from Summer Collection
                          </h4>
                          {/* Text */}
                          <p className="mb-7">
                            Appear, dry there darkness they're seas. <br />
                            <strong className="text-primary">
                              Use code 4GF5SD
                            </strong>
                          </p>
                          {/* Button */}
                          <a className="btn btn-outline-dark" href="shop.html">
                            Shop Now <i className="fe fe-arrow-right ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="w-100">
                  <div
                    className="card bg-cover"
                    style={{ backgroundImage: "url(/img/covers/cover-30.jpg)" }}
                  >
                    <div
                      className="row align-items-center"
                      style={{ minHeight: "400px" }}
                    >
                      <div className="col-12">
                        <div className="card-body px-md-10 py-11 text-center text-white">
                          {/* Preheading */}
                          <p className="text-uppercase">Enjoy an extra</p>
                          {/* Heading */}
                          <h1 className="display-4 text-uppercase">50% off</h1>
                          {/* Link */}
                          <a
                            className="link-underline text-reset"
                            href="shop.html"
                          >
                            Shop Collection
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Header */}
              <div className="row align-items-center mb-7">
                <div className="col-12 col-md">
                  {/* Heading */}
                  <h3 className="mb-1">{title ? title : "All Product"}</h3>
                  {/* Breadcrumb */}
                  <BreadCrumb>
                    <BreadCrumbItem to="/">Home</BreadCrumbItem>
                    <BreadCrumbItem to="#">
                      {title ? title : "All Product"}{" "}
                    </BreadCrumbItem>
                  </BreadCrumb>
                </div>
                <div className="col-12 col-md-auto">
                  {/* Select */}
                  <select
                    onChange={handleChangePrice}
                    className="custom-select custom-select-xs"
                  >
                    <option value="real_price.-1" selected> Giá: Cao đến thấp</option>
                    <option value="real_price.1">Giá: Thấp đến cao</option>
                  </select>
                </div>
              </div>

              {/* Products */}

              <ProductList data={dataProduct} />

              {/* Pagination */}
              {dataPaginate && (
                <Pagination {...dataPaginate.paginate} />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
