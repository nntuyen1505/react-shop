import React,{useState,useEffect} from "react";
import BreadCrumb, { BreadCrumbItem } from "../../components/BreadCrumb";
import Description from "./components/Description";
import Features from "../../components/Features";
import Product from "./components/Product";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Layout from "../../components/layout";
import ProductServices from "../services/productServices";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_DETAIL } from "../../store/type";
import { fetchProductDetail } from "../../store/action/productAction";

export default function ProductPage() {

  const dispatch = useDispatch()
  const {data, loading} = useSelector((store) => store.product)

  let{slug}=useParams()

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }, [])

  useEffect(async() => {
    dispatch(fetchProductDetail(slug))
  }, [slug])


  if(loading){
    return <Loading/>
  }

  return (
    <Layout>
      <BreadCrumb>
        <BreadCrumbItem to="/">Home</BreadCrumbItem>
        <BreadCrumbItem to="/shop">Product</BreadCrumbItem>
        <BreadCrumbItem to="#">{data?.name}</BreadCrumbItem>
      </BreadCrumb>
    {
      console.log("page",data)
    }
      <Product data={data}/>
      <Description description={data.description}/>
      {/* <Products /> */}
      <Reviews />
      <Features />
    </Layout>
  );
}
