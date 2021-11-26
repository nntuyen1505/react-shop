import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch, useHistory } from "react-router";
import BreadCrumb, { BreadCrumbItem } from "../../components/BreadCrumb";
import Layout from "../../components/layout";
import Pagination from "../../components/pagination";
import ProductList from "../../components/ProductList";
import Promo from "../../components/Promo";
import ProductServices from "../services/productServices";
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

  const [category, setCategory] = useState({
    dataCategory: [],
  });
  const [title, setTitle] = useState("");
  console.log(title);

  useEffect(async () => {
    let dataCategory = await ProductServices.category();
    console.log(dataCategory);
    if (dataCategory) {
      setCategory({
        dataCategory: dataCategory,
      });
    }
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

  const [state, setSatte] = useState({
    dataProduct: [],
    dataPaginate: {},
    // loading: true,
  });
  useEffect(async () => {
    let data = await ProductServices.product(queryUrl);
    // console.log(data);
    if (data) {
      setSatte({
        dataProduct: data.data,
        dataPaginate: data,
        // loading:false
      });
    }
  }, [queryUrl]);

  const history = useHistory();
  const { url } = useRouteMatch();

  const handleChangePrice = (event) => {
    let value = event.currentTarget.value;
    console.log(value);
    let obj = convertQueryToObject();
    console.log(obj);
    obj.sort = value;
    console.log(obj);
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
                          {category.dataCategory.map((e, i) => (
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
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                      data-toggle="collapse"
                      href="#seasonCollapse"
                    >
                      Season
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="seasonCollapse"
                      data-toggle="simplebar"
                      data-target="#seasonGroup"
                    >
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="seasonGroup"
                      >
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="seasonOne"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="seasonOne"
                          >
                            Summer
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="seasonTwo"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="seasonTwo"
                          >
                            Winter
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="seasonThree"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="seasonThree"
                          >
                            Spring &amp; Autumn
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                      data-toggle="collapse"
                      href="#sizeCollapse"
                    >
                      Size
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="sizeCollapse"
                      data-toggle="simplebar"
                      data-target="#sizeGroup"
                    >
                      <div
                        className="form-group form-group-overlow mb-6"
                        id="sizeGroup"
                      >
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeOne"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeOne"
                          >
                            3XS
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeTwo"
                            type="checkbox"
                            disabled
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeTwo"
                          >
                            2XS
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeThree"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeThree"
                          >
                            XS
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeFour"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeFour"
                          >
                            S
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeFive"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeFive"
                          >
                            M
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeSix"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeSix"
                          >
                            L
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeSeven"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeSeven"
                          >
                            XL
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeEight"
                            type="checkbox"
                            disabled
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeEight"
                          >
                            2XL
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeNine"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeNine"
                          >
                            3XL
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeTen"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeTen"
                          >
                            4XL
                          </label>
                        </div>
                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                          <input
                            className="custom-control-input"
                            id="sizeEleven"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="sizeEleven"
                          >
                            One Size
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                      data-toggle="collapse"
                      href="#colorCollapse"
                    >
                      Color
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="colorCollapse"
                      data-toggle="simplebar"
                      data-target="#colorGroup"
                    >
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="colorGroup"
                      >
                        <div className="custom-control custom-control-color mb-3">
                          <input
                            className="custom-control-input"
                            id="colorOne"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label text-dark"
                            htmlFor="colorOne"
                          >
                            <span className="text-body">Black</span>
                          </label>
                        </div>
                        <div className="custom-control custom-control-color mb-3">
                          <input
                            className="custom-control-input"
                            id="colorTwo"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            style={{ color: "#f9f9f9" }}
                            htmlFor="colorTwo"
                          >
                            <span className="text-body">White</span>
                          </label>
                        </div>
                        <div className="custom-control custom-control-color mb-3">
                          <input
                            className="custom-control-input"
                            id="colorThree"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label text-info"
                            htmlFor="colorThree"
                          >
                            <span className="text-body">Blue</span>
                          </label>
                        </div>
                        <div className="custom-control custom-control-color mb-3">
                          <input
                            className="custom-control-input"
                            id="colorFour"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label text-primary"
                            htmlFor="colorFour"
                          >
                            <span className="text-body">Red</span>
                          </label>
                        </div>
                        <div className="custom-control custom-control-color mb-3">
                          <input
                            className="custom-control-input"
                            id="colorFive"
                            type="checkbox"
                            disabled
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="colorFive"
                            style={{ color: "#795548" }}
                          >
                            <span className="text-body">Brown</span>
                          </label>
                        </div>
                        <div className="custom-control custom-control-color mb-3">
                          <input
                            className="custom-control-input"
                            id="colorSix"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label text-gray-300"
                            htmlFor="colorSix"
                          >
                            <span className="text-body">Gray</span>
                          </label>
                        </div>
                        <div className="custom-control custom-control-color mb-3">
                          <input
                            className="custom-control-input"
                            id="colorSeven"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="colorSeven"
                            style={{ color: "#17a2b8" }}
                          >
                            <span className="text-body">Cyan</span>
                          </label>
                        </div>
                        <div className="custom-control custom-control-color">
                          <input
                            className="custom-control-input"
                            id="colorEight"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="colorEight"
                            style={{ color: "#e83e8c" }}
                          >
                            <span className="text-body">Pink</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                      data-toggle="collapse"
                      href="#brandCollapse"
                    >
                      Brand
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="brandCollapse"
                      data-toggle="simplebar"
                      data-target="#brandGroup"
                    >
                      {/* Search */}
                      <div
                        data-toggle="lists"
                        data-options='{"valueNames": ["name"]}'
                      >
                        {/* Input group */}
                        <div className="input-group input-group-merge mb-6">
                          <input
                            className="form-control form-control-xs search"
                            type="search"
                            placeholder="Search Brand"
                          />
                          {/* Button */}
                          <div className="input-group-append">
                            <button className="btn btn-outline-border btn-xs">
                              <i className="fe fe-search" />
                            </button>
                          </div>
                        </div>
                        {/* Form group */}
                        <div
                          className="form-group form-group-overflow mb-6"
                          id="brandGroup"
                        >
                          <div className="list">
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="brandOne"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandOne"
                              >
                                Dsquared2
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="brandTwo"
                                type="checkbox"
                                disabled
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandTwo"
                              >
                                Alexander McQueen
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="brandThree"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandThree"
                              >
                                Balenciaga
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="brandFour"
                                type="checkbox"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandFour"
                              >
                                Adidas
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="brandFive"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandFive"
                              >
                                Balmain
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="brandSix"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandSix"
                              >
                                Burberry
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="brandSeven"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandSeven"
                              >
                                Chloé
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="brandEight"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandEight"
                              >
                                Kenzo
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="brandNine"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label name"
                                htmlFor="brandNine"
                              >
                                Givenchy
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                      data-toggle="collapse"
                      href="#priceCollapse"
                    >
                      Price
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="priceCollapse"
                      data-toggle="simplebar"
                      data-target="#priceGroup"
                    >
                      {/* Form group*/}
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="priceGroup"
                      >
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="priceOne"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="priceOne"
                          >
                            $10.00 - $49.00
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="priceTwo"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="priceTwo"
                          >
                            $50.00 - $99.00
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="priceThree"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="priceThree"
                          >
                            $100.00 - $199.00
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="priceFour"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="priceFour"
                          >
                            $200.00 and Up
                          </label>
                        </div>
                      </div>
                      {/* Range */}
                      <div className="d-flex align-items-center">
                        {/* Input */}
                        <input
                          type="number"
                          className="form-control form-control-xs"
                          placeholder="$10.00"
                          min={10}
                        />
                        {/* Divider */}
                        <div className="text-gray-350 mx-2">‒</div>
                        {/* Input */}
                        <input
                          type="number"
                          className="form-control form-control-xs"
                          placeholder="$350.00"
                          max={350}
                        />
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

              <ProductList data={state.dataProduct} />

              {/* Pagination */}
              {state.dataPaginate && (
                <Pagination {...state.dataPaginate.paginate} />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
