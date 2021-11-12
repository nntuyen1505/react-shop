import React from 'react'
import BestPicks from './components/BestPicks'
import Categories from './components/Categories'
import Brands from './components/Brands'
import CountDown from './components/CountDown'
import Features from '../../components/Features'
import Review from './components/Review'
import TopSellers from './components/TopSellers'
import Promo from '../../components/Promo'



export default function index() {
    return (
        <>
        <Promo/>
        <Categories/>    
        <Features/> 
        <BestPicks/>
        <TopSellers/>
        <CountDown/>
        <Review/>
        <Brands/>
        </>
    )
}
