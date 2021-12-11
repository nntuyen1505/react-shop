import React, { useEffect, useState } from "react";
import BestPicks from "./components/BestPicks";
import Categories from "./components/Categories";
import Brands from "./components/Brands";
import CountDown from "./components/CountDown";
import Features from "../../components/Features";
import Review from "./components/Review";
import Promo from "../../components/Promo";
import Layout from "../../components/layout";
import ProductList from "../../components/ProductList";
import { Link } from "react-router-dom";
import { api } from "../services/config";
import Loading from "../../components/Loading";

export default function Home() {

  const [renderList,setRenderList]=useState([])
  const [state, setState] = useState({
    loading:true,
    data1: [],
    data2: [],
    data3: [],
  });

  async function callAPI() {
    let res = await fetch(`${api}/product?sort=real_price.-1&categories=1789&page=3`).then((res) =>
      res.json()
    );
    let res2 = await fetch(`${api}/product?sort=real_price.-1&categories=1801&page=3`).then((res) =>
      res.json()
    );
    let res3 = await fetch(`${api}/product?sort=real_price.-1&categories=1846&page=3`).then((res) =>
      res.json()
    );

    if (res.data && res2.data && res3.data) {
      setState({
        loading:false,
        data1: res.data,
        data2: res2.data,
        data3: res3.data,

      });
      setRenderList(res.data)
    }
  }

  useEffect(() => {

    callAPI();
  }, []);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  
  if(state.loading){
    return <Loading/>
  }

  return (
    <Layout>
      <Promo />
      <Categories />
      <Features />
      <BestPicks />
      <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              {/* Heading */}
              <h2 className="mb-4 text-center">Top month Sellers</h2>
              {/* Nav */}
              <div className="nav justify-content-center mb-10">
                <a
                  className="nav-link active"
                  href="#topSellersTab"
                  data-toggle="tab"
                  onClick={() => setRenderList(state.data1)}
                >
                  SmartPhone
                </a>
                <a
                  className="nav-link"
                  href="#topSellersTab"
                  data-toggle="tab"
                  onClick={() => setRenderList(state.data2)}
                >
                  Camera
                </a>
                <a
                  className="nav-link"
                  href="#topSellersTab"
                  data-toggle="tab"
                  onClick={() =>setRenderList(state.data3)}
                >
                  Laptop
                </a>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="topSellersTab">
              <div className="row">
                    <ProductList data={renderList}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Link  */}
              <div className="mt-7 text-center">
                <Link className="link-underline" to="/shop">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CountDown />
      <Review />
      <Brands />
    </Layout>
  );
}
