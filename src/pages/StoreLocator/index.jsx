import React from 'react'
import BreadCrumb, { BreadCrumbItem } from '../../components/BreadCrumb'
import Layout from '../../components/layout'
import Header from './components/Header'
import Map from './components/Map'

export default function StoreLocator() {
    return (
        <Layout>
            <BreadCrumb>
                <BreadCrumbItem to="/">Home</BreadCrumbItem>
                <BreadCrumbItem to="contact">Contact Us</BreadCrumbItem>
                <BreadCrumbItem to="#">Shopping Cart</BreadCrumbItem>
            </BreadCrumb>
            <Header/>
            <Map/>
        </Layout>
    )
}
