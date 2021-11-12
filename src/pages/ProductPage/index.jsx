import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Description from './components/Description'
import Features from '../../components/Features'
import Product from './components/Product'
import Products from './components/Products'
import Reviews from './components/Reviews'



export default function ProductPage() {
    return (
        <>
            <BreadCrumb/>
            <Product/>
            <Description/>
            <Products/>
            <Reviews/>
            <Features/>
        </>
    )
}
