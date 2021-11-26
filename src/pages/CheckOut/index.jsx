import React from 'react'
import BreadCrumb, { BreadCrumbItem } from '../../components/BreadCrumb'
import Content from './components/Content'
import Features from '../../components/Features'
import Layout from '../../components/layout'

export default function CheckOut() {
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
