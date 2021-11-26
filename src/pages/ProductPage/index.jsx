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

export default function ProductPage() {

  let{slug}=useParams()

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }, [])
  const[state, setState]=useState({
    data:{},
  })

  useEffect(async() => {

    let dataDetail = await ProductServices.productDetail(slug)
    // console.log(dataDetail)
    if(dataDetail.data.length>0){
      setState({
        data:dataDetail.data[0]
      })
    }

  }, [slug])

  return (
    <Layout>
      <BreadCrumb>
        <BreadCrumbItem to="/">Home</BreadCrumbItem>
        <BreadCrumbItem to="/shop">Product</BreadCrumbItem>
        <BreadCrumbItem to="#">{state.data?.name}</BreadCrumbItem>
      </BreadCrumb>
    {
      console.log("page",state.data)
    }
      <Product data={state.data}/>
      <Description description={state.data.description}/>
      <Products />
      <Reviews />
      <Features />
    </Layout>
  );
}
