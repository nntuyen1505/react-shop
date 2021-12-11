import React, { useEffect } from 'react'
import BreadCrumb, { BreadCrumbItem } from '../../components/BreadCrumb'
import Content from './components/Content'
import Features from '../../components/Features'
import Layout from '../../components/layout'

export default function CheckOut() {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);

    return (
        <Layout>
        <BreadCrumb>
            <BreadCrumbItem to="/">Home</BreadCrumbItem>
            <BreadCrumbItem to="/cart">Shopping Cart</BreadCrumbItem>
            <BreadCrumbItem to="#">Checkout</BreadCrumbItem>
        </BreadCrumb>
        <Content/>
        <Features/>
        </Layout>
    )
}
